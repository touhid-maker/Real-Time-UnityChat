import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";



function ContactList() {

  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

   useEffect(() => {
    document.title = "Contact Lists of UnityChat"
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;


  return (
    <>
  <div className="chatcontactlist-section bg-light">
    {Array.isArray(allContacts) && allContacts.map((contact) => (
    <div
      key={contact._id}
      className="clickable contact-user-bg bg-light border-1 border-bottom"
      style={{transition: "background 0.2s", padding: '12px 15px'  }}
      onClick={() => setSelectedUser(contact)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
        <div className="user-img-div rounded-circle overflow-hidden border-1 border border-primary">
            <img
              src={contact.profilePic || "/user-avatar.png"}
              className=""
              style={{ width: "40px", height: "40px", objectFit: 'cover' }}/>
          </div>
        <span className="contact-username text-black fw-normal m-0" style={{ fontSize: '16px'}}>
          {contact.fullName}
        </span>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-black-50 online-text" style={{fontSize: '12px'}}>{onlineUsers.includes(contact._id) ? "Offline" : "Online"}</span>
        <div className={`${onlineUsers.includes(contact._id) ? "offline" : "online"}`}></div>
      </div>
      </div>
    </div>
  ))}
  </div>
</>

  )
}

export default ContactList;
