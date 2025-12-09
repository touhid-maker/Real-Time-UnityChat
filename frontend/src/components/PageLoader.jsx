import { LoaderIcon } from "lucide-react"
const UnityChatLogo = "/images/UnityChatLogo.png"
import './PageLoader.css'

function PageLoader() {
    return (
        <div className="loader-container d-flex flex-column justify-content-center align-items-center">
            <div className=" d-flex align-items-center justify-content-center gap-3">
                <img src={UnityChatLogo} alt="UnitiyChat Logo" style={{ height: 'auto', width: '60px' }} />
                <span className="fs-2 fw-bold my-2">UnityChat</span>
            </div>
            <div className=" d-flex align-items-center justify-content-center gap-1 mt-3">
                <LoaderIcon size={30} className="loader-spin" />
                <span className="fs-5 text-dark">Loading...</span>
            </div>
        </div>
    )
}

export default PageLoader;
