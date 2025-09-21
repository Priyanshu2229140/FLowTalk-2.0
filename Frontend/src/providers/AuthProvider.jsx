import { createContext, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const { getToken } = useAuth();

  useEffect(() => {
    // Add interceptor
    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken();
          if (token) {
            //console.log(" Clerk JWT Token:", token);
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        } catch (error) {
          if (
            error.message?.includes("auth") ||
            error.message?.includes("token")
          ) {
            toast.error("Authentication issue. Please refresh the page.");
          }
          return config;
        }
      },
      (error) => {
        console.error("Axios request error:", error);
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [getToken]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
