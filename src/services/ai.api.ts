import { axiosInstance } from "@/lib/axiosInstance"


export const getAIPropertyReview = async (listingId: string) => {
    const res = await axiosInstance.get(`/api/ai/ai-review/${listingId}`)
    return res.data
}