import { StreamChat } from "stream-chat";

import { ENV } from "./env.js";

const streamClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    console.log("User upserted in Stream", userData.name);
    return userData;
  } catch (error) {
    console.log("Error upserting user in Stream", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    // 1. Find all channels where this user was a member
    const channels = await streamClient.queryChannels({
      members: { $in: [userId] },
    });

    for (const channel of channels) {
      const memberIds = Object.keys(channel.state.members);

      // ✅ Only delete DM channels (exactly 2 members: this user + someone else)
      if (memberIds.length === 2) {
        await channel.delete();
        console.log(`Deleted DM channel ${channel.id} for user ${userId}`);
      } else {
        // Optional: just remove the user from group/public channels
        await channel.removeMembers([userId]);
        console.log(
          `Removed user ${userId} from channel ${channel.id} (kept history)`
        );
      }
    }

    // 2. Finally, hard-delete the user so no "deleted-user-..." remains
    await streamClient.deleteUser(userId, { hard_delete: true });

    console.log("User deleted in Stream with cleanup:", userId);
  } catch (error) {
    console.log("Error deleting user in Stream", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdString = userId.toString();
    return streamClient.createToken(userIdString);
  } catch (error) {
    console.log("Error generating stream token", error);
    return null;
  }
};
export const addUserToPublicChannels = async (newUserId) => {
  const publicChannels = await streamClient.queryChannels({
    discoverable: true,
  });

  for (const channel of publicChannels) {
    await channel.addMembers([newUserId]);
  }
};
