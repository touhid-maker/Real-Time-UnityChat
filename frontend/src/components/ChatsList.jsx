import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";



function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    document.title = "Chat Lists of UnityChat"
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
    <div className="chatlist-section bg-light">
    {chats.map((chat) => (
    <div
      key={chat._id}
      className="clickable chat-user-bg bg-light border-1 border-bottom"
      style={{transition: "background 0.2s", padding: '12px 15px'  }}
      onClick={() => setSelectedUser(chat)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
        <div className="user-img-div rounded-circle overflow-hidden border-1 border border-primary">
            <img
              src={chat.profilePic || "/user-avatar.png"}
              className=""
              style={{ width: "40px", height: "40px", objectFit: 'cover' }}/>
          </div>
        <span className="chat-username text-black fw-normal m-0" style={{ fontSize: '16px'}}>
          {chat.fullName}
        </span>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-black-50 online-text" style={{fontSize: '12px'}}>{onlineUsers.includes(chat._id) ? "Offline" : "Online"}</span>
        <div className={`${onlineUsers.includes(chat._id) ? "offline" : "online"}`}></div>
      </div>
      </div>
    </div>
  ))}
  </div>

    </>

  )
}
export default ChatsList;
