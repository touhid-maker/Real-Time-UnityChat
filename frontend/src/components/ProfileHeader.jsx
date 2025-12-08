import { useState, useRef } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { useChatStore } from "../store/useChatStore"

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {

  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result
      setSelectedImg(base64Image)
      await updateProfile({ profilePic: base64Image })
    }


  }


  return (
    <div className="d-flex align-items-center justify-content-between gap-2">
      <div className="d-flex align-items-center justify-content-center gap-2 ">
        {/* avatar */}
        <div className="">
          <input type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="d-none"
          />
          <div className="position-relative user-profile-avatar" style={{ width: "fit-content" }} data-tip="Upload Profile Picture">
            <button className="avatar-btn overflow-hidden rounded-pill d-flex align-items-center justify-content-center" onClick={() => fileInputRef.current.click()}>
              <img src={selectedImg || authUser.profilePic || "user-avatar.png"} alt="" style={{ height: '40px', width: '40px', objectFit: 'cover' }} />
            </button>
            <div className="bg-success rounded-pill position-absolute border border-1 border-white" style={{ height: "11px", width: "11px", top: "2px", right: "0" }}></div>
          </div>
        </div>

        {/* username & online text */}
        <div className="d-flex flex-column">
          <span className="fs-6 text-black fw-semibold">{authUser.fullName} (You)</span>
          {/* <div className="d-flex align-items-center gap-1">
          <div className="rounded-2 bg-success border border-1 border-whtie" style={{ height: "12px", width: "12px" }}></div>
          <span className="text-blck-50" style={{ fontSize: '13px' }}>Online</span>
        </div> */}
          <span className="text-black" style={{ fontSize: '13px' }}>Online</span>
        </div>

      </div>


      {/* Button Section */}
      <div className="d-flex align-items-center justify-content-center gap-3">
        {/* Sound Button */}
        <button className="border-0  bg-transparent" onClick={() => {
          mouseClickSound.currentTime = 0;
          mouseClickSound.play().catch((error) => {
            console.log("Audio play failed: ", error);
          });
          toggleSound();
        }}>


          {
            isSoundEnabled ? (
              <i class="bi bi-volume-up fs-6 text-primary border-1 border border-primary rounded-2" style={{ padding: "3px 8px" }}></i>
            ) :
              (
                <i class="bi bi-volume-mute fs-6 text-secondary border-1 border border-secondary rounded-2" style={{ padding: "3px 8px" }}></i>
              )
          }

        </button>

        {/* Logout Button */}
        {/* <button className="logout-btn bg-light d-flex align-items-center gap-1 p-1 px-2 border border-1 border-light rounded-2 text-black ms-1" onClick={logout} title="logout">
          <i class="logout-icon bi bi-box-arrow-right text-black" style={{fontSize: '13px'}}></i>
        </button> */}
        <button className="logout-btn d-flex align-items-center gap-2 px-4 border-0 rounded-pill text-black" onClick={logout} title="logout" style={{ paddingTop: '6px', paddingBottom: '6px', background: 'linear-gradient(135deg, #3D51D2, #8C49CE)' }}>
          <span className="text-white" style={{ fontSize: '14px' }}>Logout</span>
          <i class="bi bi-box-arrow-right text-white" style={{ fontSize: '13px' }}></i>

        </button>
      </div>



    </div>
  )
}

export default ProfileHeader;