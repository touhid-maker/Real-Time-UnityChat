import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">

      {/* Icon Circle */}
      <div
        className="rounded-circle d-flex align-items-center justify-content-center mb-4"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #3D51D2, #8C49CE)"
        }}
      >
        <MessageCircleIcon className="text-white" style={{ width: "40px", height: "40px" }} />
      </div>

      {/* Title */}
      <h3 className="fs-5 fw-medium text-black mb-3">
        Start your conversation with {name}
      </h3>

      {/* Description */}
      <div className="d-flex flex-column gap-2 mb-4" style={{ maxWidth: "350px" }}>
        <p className="text-secondary small">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>

        <div
          className="mx-auto"
          style={{
            width: "130px",
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(6,182,212,0.3), transparent)"
          }}
        ></div>
      </div>

      {/* Suggested Messages */}
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <button
          className="beginner-text px-3 py-2 rounded-pill small fw-medium text-info border-0"
          style={{ background: "linear-gradient(135deg,#8C49CE, #3D51D2)", transition: "0.2s" }}
        >
          <span className="text-white">👋 Say Hello</span>
        </button>

        <button
          className="beginner-text px-3 py-2 rounded-pill small fw-medium text-info border-0"
          style={{ background: "linear-gradient(135deg,#8C49CE, #3D51D2)", transition: "0.2s" }}
        >
       <span className="text-white">🤝 How are you?</span>
        </button>

        <button
          className="beginner-text px-3 py-2 rounded-pill small fw-medium text-info border-0"
          style={{ background: "linear-gradient(135deg,#8C49CE, #3D51D2)", transition: "0.2s" }}
        >
          <span className="text-white">📅 Meet up soon?</span>
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
