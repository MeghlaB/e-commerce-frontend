"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Fetch full user object (not just role)
const fetchUserDetails = async (email) => {
    if (!email) throw new Error("No email provided");
    const { data } = await axios.get(`${apiBaseUrl}/api/auth/role?email=${email}`);
    console.log(data); // Full user object: { _id, name, email, role, ... }
    return data;
};

export const useUserRole = (email) => {
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["userDetails", email],
        queryFn: () => fetchUserDetails(email),
        enabled: !!email,
    });

    return {
        role: user?.role,
        userId: user?._id,
        user,
        isLoading,
        isError,
        error,
    };
};
