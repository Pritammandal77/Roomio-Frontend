"use client";

const GoogleLoginButton = () => {
  // const handleGoogleLogin = () => {
  //   // Points to the Express Backend route
  //   const backendUrl =
  //     process.env.NEXT_PUBLIC_API_BASE_URL;
  //   window.location.href = `${backendUrl}/api/user/auth/google`;
  // };

  const handleLogin = () => {
    // Proxy URL (/api/auth/google) ki jagah direct Backend URL use karein
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/auth/google`;
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center cursor-pointer gap-3 w-full max-w-sm py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="w-5 h-5"
      />
      <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
