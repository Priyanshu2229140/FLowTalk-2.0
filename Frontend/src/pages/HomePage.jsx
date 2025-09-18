import { UserButton } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useStreamChat } from "./../hooks/useStreamChat";
import { useSearchParams } from "react-router";
import PageLoader from './../components/PageLoader.jsx';

const HomePage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { chatClient, error, isLoading } = useStreamChat();

  useEffect(() => {
    if (chatClient) {
      const channelId = searchParams.get("channel");
      if (channelId) {
        const channel = chatClient.channel("messaging", channelId);
        setActiveChannel(channel); 
      }
    }
  }, [chatClient, searchParams]);
if(error) return <div>Error loading chat client: {error.message}</div>;
if(isLoading||!chatClient) return <PageLoader/>;
  return (
    <div>
      <UserButton />
      Flow Talk's HomePage
    </div>
  );
};

export default HomePage;
