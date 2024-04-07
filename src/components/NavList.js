import "./NavList.css"
import {Link} from "react-router-dom";
export default function NavList() {
   
    return(
        <>
            
            <ul className="Navlist">
                {/* <li><button className="burger"><div>&#9776;</div></button></li> */}
                <li><Link  to="/" className="link"><button className="butli">Home</button></Link></li>
                <li><Link to="/paper" className="link"><button className="butli">Paper</button></Link></li>
                <li><Link to="/project" className="link"><button className="butli">Project</button></Link></li>
                <li><Link to="/skills" className="link"><button className="butli">Skills</button></Link></li>
                <li><Link to="/courses" className="link"><button className="butli">courses</button></Link></li>
                <li><Link to="/resume" className="link"><button className="butli">Resume</button></Link></li>
            </ul>
        </>
    )
}