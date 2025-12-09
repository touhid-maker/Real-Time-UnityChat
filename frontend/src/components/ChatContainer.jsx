import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

 useEffect(() => {
  if (!selectedUser?._id) return;

  getMessagesByUserId(selectedUser._id);
  subscribeToMessages();

  return () => unsubscribeFromMessages();
}, [selectedUser]);




  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }), [messages]

  return (

    <>
      <ChatHeader />
      <div className="overflow-hidden">
        <div className=" pt-2" style={{ height: '60vh', overflowY: 'scroll' }}>
          {messages?.length > 0 && !isMessagesLoading ? (
            <div className="mx-auto">

              {messages.map((msg, index) => {
                const isMe = msg.senderId === authUser._id;
                return (
                  <div
                    key={msg._id}
                    className={`d-flex mb-4 ${isMe ? "justify-content-end" : "justify-content-start"}`}>
                    <div
                      className="rounded position-relative px-3">

                      {/* Image */}
                      {msg.image && (
                        <img
                          src={msg.image}
                          alt="Shared"
                          className="img-fluid rounded mb-2"
                          style={{ height: "190px", objectFit: "cover" }}
                        />
                      )}

                     <div className="">
                       {/* Text */}
                      <div className="p-2 px-3 rounded-2" style={{background: 'linear-gradient(135deg, #3D51D2, #8C49CE)', fontSize: '15px'}}>
                        {msg.text && <p className="mb-1 text-white">{msg.text}</p>}
                        {/* Time */}

                      </div>
                      <div className="">
                        <span className="small opacity-75 mb-0 d-flex align-items-center justify-content-end gap-1 " style={{fontSize: '11px', color: '#777777ff'}} >
                        {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </span>
                      </div>
                     </div>



                    </div>
                  </div>
                );
              })}

              {/* scroll anchor */}
              <div ref={messageEndRef}></div>
            </div>
          ) : isMessagesLoading ? (
            <MessagesLoadingSkeleton />
          ) : (
            <NoChatHistoryPlaceholder name={selectedUser.fullName} />
          )}
        </div>
      </div>
      <MessageInput />
    </>
  );
}

export default ChatContainer;





