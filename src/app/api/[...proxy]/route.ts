// // app/api/[...proxy]/route.ts
// import { NextRequest, NextResponse } from "next/server";

// const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// async function handler(req: NextRequest) {
//     const { pathname, search } = req.nextUrl;

//     const backendPath = pathname.replace(/^\/api/, "");
//     const url = `${BACKEND_URL}/api${backendPath}${search}`;

//     const isFormData = req.headers.get("content-type")?.includes("multipart/form-data");

//     const body = req.method === "GET" || req.method === "HEAD"
//         ? undefined
//         : isFormData
//             ? await req.blob()
//             : await req.text();

//     const headers = new Headers();
//     headers.set("content-type", req.headers.get("content-type") || "application/json");
//     headers.set("accept-encoding", "identity");  // tells Render: no compression
//     const cookies = req.headers.get("cookie");
//     if (cookies) {
//         headers.set("cookie", cookies);
//     }

//     const backendRes = await fetch(url, {
//         method: req.method,
//         headers,
//         body,
//         credentials: "include",
//     });

//     const response = new NextResponse(backendRes.body, {
//         status: backendRes.status,
//         headers: backendRes.headers,
//     });

//     const setCookie = backendRes.headers.get("set-cookie");
//     if (setCookie) {
//         response.headers.set("set-cookie", setCookie);
//     }

//     return response;
// }

// export const GET = handler;
// export const POST = handler;
// export const PUT = handler;
// export const DELETE = handler;
// export const PATCH = handler;



import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function handler(req: NextRequest) {
    const { pathname, search } = req.nextUrl;

    // 1. Construct the target backend URL
    const backendPath = pathname.replace(/^\/api/, "");
    const url = `${BACKEND_URL}/api${backendPath}${search}`;

    // 2. Determine if the request is sending files (for Multer/Cloudinary)
    const isFormData = req.headers.get("content-type")?.includes("multipart/form-data");

    // 3. Prepare the body
    const body = req.method === "GET" || req.method === "HEAD"
        ? undefined
        : isFormData
            ? await req.blob()
            : await req.text();

    // 4. Clone and prepare headers to send to the backend
    const headers = new Headers();
    
    // Copy essential headers from the original request
    const contentType = req.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    
    headers.set("accept-encoding", "identity"); // Prevents compression issues with Render/Railway
    
    // Forward the cookies from the browser to the backend
    const cookies = req.headers.get("cookie");
    if (cookies) {
        headers.set("cookie", cookies);
    }

    try {
        const backendRes = await fetch(url, {
            method: req.method,
            headers,
            body,
            credentials: "include", // Essential for forwarding cookies
        });

        // 5. Initialize the response with the backend's body and status
        const response = new NextResponse(backendRes.body, {
            status: backendRes.status,
            headers: backendRes.headers,
        });

        // 6. FIX: Handle Multiple Cookies (The "Set-Cookie" fix)
        // .get("set-cookie") only returns the first cookie. 
        // .getSetCookie() returns an array of ALL cookies (Access, Refresh, etc.)
        const setCookies = backendRes.headers.getSetCookie();

        if (setCookies.length > 0) {
            // Remove any default set-cookie headers to avoid conflicts
            response.headers.delete("set-cookie");

            // Manually append each cookie to the final response
            setCookies.forEach((cookie) => {
                response.headers.append("set-cookie", cookie);
            });
        }

        return response;
    } catch (error) {
        console.error("Proxy Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error during proxying" },
            { status: 500 }
        );
    }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;

