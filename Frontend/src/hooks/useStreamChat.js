import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";
import * as Sentry from "@sentry/react";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

export const useStreamChat = () => {
  const { user } = useUser();
  const [chatClient, setChatClient] = useState(null);

  const {
    data: tokenData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!user?.id,
  });

  useEffect(() => {
    let cancelled = false;
    let client;

    const initChat = async () => {
      if (!tokenData?.token || !user) return;

      try {
        //console.log("Stream token:", tokenData.token);

        client = StreamChat.getInstance(STREAM_API_KEY);

        await client.connectUser(
          {
            id: user.id,
            name: user.fullName,
            image: user.imageUrl,
          },
          tokenData.token
        );

        if (!cancelled) setChatClient(client);
      } catch (error) {
        console.error("Error connecting to Stream Chat:", error);
        Sentry.captureException(error, {
          tags: { Component: "useStreamChat" },
          extra: {
            context: "stream_chat_connection",
            userId: user?.id,
            streamApiKey: STREAM_API_KEY ? "present" : "missing",
          },
        });
      }
    };

    initChat();

    return () => {
      cancelled = true;
      if (client) {
        client.disconnectUser();
      }
    };
  }, [tokenData, user]);

  return { chatClient, isLoading, error };
};
