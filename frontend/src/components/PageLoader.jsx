import { LoaderIcon } from "lucide-react"
import './PageLoader.css'

function PageLoader(){
    return(
        <div className="loader-container d-flex align-items-center justify-content-center gap-1">
            <LoaderIcon size={30} className="loader-spin" />
            <span className="fs-5 text-dark">Loading...</span>
        </div>
    )
}

export default PageLoader;