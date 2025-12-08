import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center gap-3">
      <div className="rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, #3D51D2, #8C49CE)" }}>
        <MessageCircleIcon style={{ width: "32px", height: "32px", color: '#fff'}} />
      </div>

      <div>
        <h5 className="fw-medium mb-1" style={{color: '#8C49CE'}}>No conversations yet</h5>
        <p className="text-secondary  px-3">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        className="px-3 py-2 small text-white rounded-pill btn bg-color-btn find-Contacts-btn">
        Find contacts
      </button>
    </div>

  );
}
export default NoChatsFound;
