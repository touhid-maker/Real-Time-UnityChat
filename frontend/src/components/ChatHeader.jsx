import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import ChatContainer from "./ChatContainer";
import MessageInput from "./MessageInput";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="">
      <div
        className="d-flex justify-content-between align-items-center p-2 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8b49ceb5, #3d51d2ae)',
          // background: 'linear-gradient(90deg, #ece6ff, #e8edff)',
          // borderBottom: '1px solid gray',
          maxHeight: "84px"
        }}>

        {/* Left: Avatar & Name */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex aling-items-center gap-2 ">
           
            <div>
              <img
                src={selectedUser.profilePic || "/user-avatar.png"}
                alt={selectedUser.fullName}
                className="rounded-circle overflow-hidden"
                style={{ width: "30px", height: "30px", objectFit: 'cover', border: '2px solid #86f2e9' }}
              />
            </div>
             <span className="text-light p-0 fs-6 fw-semibold">{selectedUser.fullName}</span>
          </div>

            <div className="d-flex align-items-center justify-content-center gap-1">
              <span className="m-0 p-0" style={{color: '#ffffffff', fontSize: '12px'}}>
              {isOnline ? "Offline" : "Online"}  
            </span>
            <div className="bg-success rounded-circle border-1 border m-0" style={{height: '10px' , width: '10px'}}></div>
            </div>

        </div>

        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="bg-transparent border-0 p-0 chat-close-btn">
          <i class="bi bi-x-square fs-5 text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
