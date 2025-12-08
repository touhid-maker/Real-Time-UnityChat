import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">

      {/* Icon circle */}
      <div
        className="rounded-circle d-flex align-items-center justify-content-center mb-4"
        style={{
          width: "80px",
          height: "80px",
           background: 'linear-gradient(135deg, #3D51D2, #8C49CE)',
        }}
      >
        <MessageCircleIcon
        className="text-white"
          style={{ width: "40px", height: "40px",}}
        />
      </div>

      {/* Title */}
      <h3 className="fs-4 fw-semibold mb-2" style={{color: '#844ACF'}}>
        Select a conversation
      </h3>

      {/* Description */}
      <p className="text-secondary" style={{ maxWidth: "450px" }}>
        Choose a contact from the sidebar to start chatting or continue a previous
        conversation.
      </p>

    </div>
  );
};

export default NoConversationPlaceholder;
