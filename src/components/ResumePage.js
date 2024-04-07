import "./ResumePage.css"
import NavBar from "./NavBar"
import Resume from "./Resume"
import img from "./resume.png";
import FooterTab from "./FooterTab"
import resume1pdf from "./resume.pdf"
import resume3pdf from "./resume3.pdf"
import resume2pdf from "./resume2.pdf"
import img2 from "./resume2.png"
import img3 from "./resume3.png"
export default function ResumePage()
{
    return(
        <div className="ResumePage">
            <NavBar />
            <div className="container1">
                <Resume img={img2} pdf={resume2pdf}/>
                <Resume img={img} pdf={resume1pdf}/>
                <Resume img={img3} pdf={resume3pdf}/>
            </div>
            <FooterTab />

        </div>


    )

}