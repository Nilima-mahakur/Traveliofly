import "./Footer.css"
import { FaFacebook,FaInstagram,FaLinkedin ,FaGitSquare} from "react-icons/fa";

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Traveliofly</h1>
                    <p>Choose your dream Trip.</p>
                </div>
                <div >
                    <a href="/">
                         <FaFacebook className="tag"/>
                    </a>
                    <a href="/">
                        <FaInstagram className="tag"/>
                    </a>
                    <a href="/">
                      <FaLinkedin className="tag"/>
                    </a>
                    <a href="/">
                        <FaGitSquare className="tag"/>
                     
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
               
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troublerecording</a>
                    <a href="/">Contact us</a>
                    <a href="/">Query email us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of services</a>
                    <a href="/">Conditions</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer