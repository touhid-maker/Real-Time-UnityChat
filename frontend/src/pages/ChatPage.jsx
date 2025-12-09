import { useChatStore } from "../store/useChatStore";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ProfileHeader from "../components/ProfileHeader";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import ChatContainer from "../components/ChatContainer";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatHeader from "../components/ChatHeader";
const UnityChatLogo = "/images/UnityChatLogo.png"

function ChatPage() {

    const { activeTab, selectedUser } = useChatStore();

    return (
        <div className="col-11">
            <div className="chat-dashboard-section bg-light rounded-4 pt-0 shadow-sm position-relative overflow-hidden" style={{ border: "1px solid #7184f9ab", height: "97vh" }}>
                {/* <div className="chat-dashboard-header bg-light d-flex align-items-center justify-content-between p-2 px-4 border-bottom border-1" style={{ zIndex: '1000' }}>
                    <div className="bg-light  rounded-2">
                        <img src={UnityChatLogo} alt="UnityChat Logo" style={{ height: "35px", width: "35px" }} />
                    </div>
                    <div>
                        <ProfileHeader />
                    </div>
                </div> */}
                <div className="chat-dashboard d-flex align-items-center justify-content-between">
                    <div className="left-section  col-4 overflow-hidden">
                        <div className=" border-1 border-end" style={{ height: "97vh" }}>
                             <div className="profile-header-mobile d-flex align-items-center justify-content-between gap-3 rounded-2 pt-3 px-4">
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                    <img src={UnityChatLogo} alt="UnityChat Logo" style={{ height: "40px", width: "40px" }} />
                                    <span className="fs-2 fw-bold">UnityChat</span>
                                </div>
                                <div className="profile-header-mobile-profile">
                                    <ProfileHeader />
                                </div>
                            </div>
                            <div className="profile-header-desktop d-flex align-items-center justify-content-start gap-3 rounded-2 pt-3 px-4">
                                <img src={UnityChatLogo} alt="UnityChat Logo" style={{ height: "40px", width: "40px" }} />
                                <span className="fs-2 fw-bold">UnityChat</span>
                            </div>
                            <div className="mt-3">
                                <ActiveTabSwitch />
                            </div>
                            <div className="chat-contact-lists-section mx-4 rounded-4 border border-1 overflow-hidden" style={{ height: "60vh", background: '#efefefff' }}>
                                <div className="overflow-y-scroll" style={{ height: "100%" }}>
                                    {activeTab === "chats" ? <ChatsList /> : <ContactList />}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right-section col-8 px-4 pb-4" style={{ height: "97vh" }}>
                        <div className="py-3 profile-header-desktop">
                            <ProfileHeader />
                        </div>
                        <div className="message-content-body rounded-4 overflow-hidden border border-1 position-relative" style={{ height: '78vh', background: '#efefefff' }}>
                            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;
