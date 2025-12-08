import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSound.js";
import { useChatStore } from "../store/useChatStore.js";
import toast from "react-hot-toast";
import { ImageIcon, SendIcon, XIcon } from "lucide-react";

function MessageInput() {
    const { playRandomKeyStrokeSound } = useKeyboardSound();
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    const fileInputRef = useRef(null);

    const { sendMessage, isSoundEnabled } = useChatStore();

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!text.trim() && !imagePreview) return;
        if (isSoundEnabled) playRandomKeyStrokeSound();

        sendMessage({
            text: text.trim(),
            image: imagePreview,
        });
        setText("");
        setImagePreview("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            toast.error("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
         <div className="p-2 px-3 border-1 border-top position-absolute d-flex align-items-center w-100" style={{bottom: '0', background: '#EFEFEF  '}} >


          <div className="positon-relative w-100" style={{height: 'fit-content', bottom: '0'}}>
             <div>
             {/* IMAGE PREVIEW */}
            {imagePreview && (
                <div className="mx-auto mb-3 d-flex align-items-center" style={{ maxWidth: "900px" }}>
                    <div className="position-relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="rounded border border-1" 
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderColor: "rgb(51,65,85)",
                            }}
                        />

                        {/* Remove preview button */}
                        <button
                            type="button"
                            onClick={removeImage}
                            className="position-absolute d-flex align-items-center justify-content-center rounded-circle border-0"
                            style={{
                                top: "-8px",
                                right: "-8px",
                                width: "24px",
                                height: "24px",
                                background: "rgba(230, 230, 230, 1)",
                                color: "rgba(87, 87, 87, 1)",
                                cursor: "pointer"
                            }}>
                            <i class="bi bi-x fs-6" ></i>
                        </button>
                    </div>
                </div>
            )}
           </div>
            {/* FORM */}
           <div className="w-100">
             <form
                onSubmit={handleSendMessage}
                className="mx-auto d-flex gap-3"
                style={{ maxWidth: "900px" }}
            >
                {/* TEXT INPUT */}
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        isSoundEnabled && playRandomKeyStrokeSound();
                    }}
                    className="input-text-btn text-black w-100 px-3 p-2 rounded-2"
                    placeholder="Type your message..."
                    style={{
                      
                    }}
                />

                {/* HIDDEN FILE INPUT */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="d-none"
                />

                {/* IMAGE UPLOAD BUTTON */}
                <button
                    type="button "
                    onClick={() => fileInputRef.current?.click()}
                    className="input-img-button d-flex align-items-center justify-content-center border border-1 border-primary rounded-2"
                    style={{
                        color: imagePreview ? "#544FD1" : "rgb(148,163,184)",
                        padding: "6px 10px",
                        transition: "0.2s"
                    }}
                >
                    <i class="bi bi-card-image" style={{color: '#544FD1', fontSize: '15px'}}></i>
                </button> 

                {/* SEND BUTTON */}
                <button
                    type="submit"
                    disabled={!text.trim() && !imagePreview}
                    className="send-btn border-0 text-white fw-medium d-flex align-items-center justify-content-center rounded-2 px-3"
                    style={{
                        background: 'linear-gradient(135deg, #3D51D2, #8C49CE)',
                        opacity: !text.trim() && !imagePreview ? 0.7 : 1,
                        cursor: !text.trim() && !imagePreview ? "not-allowed" : "pointer",
                        transition: "0.2s"
                    }}
                    // onMouseEnter={(e) =>
                    // (e.currentTarget.style.background =
                    //     "linear-gradient(to right, rgb(8,145,178), rgb(14,116,144))")
                    // }
                    // onMouseLeave={(e) =>
                    // (e.currentTarget.style.background =
                    //     "linear-gradient(to right, rgb(6,182,212), rgb(8,145,178))")
                    // }
                >
                    <i class="bi bi-send" style={{ fontSize: '15px'}}></i>
                </button>
            </form>
           </div>
          </div>


           
        </div>

    );
}
export default MessageInput;
