import Navbar from "./Navbar.jsx";
import { BrowserRouter } from "react-router-dom"

function Header(){
    return(
        <div>
            <h1 className="hero-title">Tanishq Sharma</h1>
            <h2 className="hero-position">Back-End Developer</h2>

            <p className="hero-description">
                I have over 4 years of experience in developing, optimizing and enhancing security of cloud-based solutions. 
            </p>

            <BrowserRouter>
                <Navbar />
            </BrowserRouter>

            {/* Image below navbar */}
            <div className="hero-image-container">
                <img src={"/assets/displayPic.webp"} alt="Tanishq Sharma" className="hero-image" />
            </div>

        </div>
    )
}

export default Header;