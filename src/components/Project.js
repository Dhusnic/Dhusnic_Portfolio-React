import NavBar from "./NavBar";
import img from "./certificates/Manipal.jpg"
import Components from "./Components";
import "./CommanGrid.css";
import FooterTab from "./FooterTab"
import Venti from "./certificates/Diy Ventilator.jpeg"
export default function ProjectPage() {
    return(
        <>
            <NavBar />
            <div className="gridItemsContainer">
                <div className="gridItems">
                    <Components img={img} one_1={"Project Title"} one_2={"Automated Lighting"} tow_1={"year"} tow_2={"2022"} three_1={"Achivement"} three_2={"SIH23 Finalist"} four_1={"Members"} four_2={"6"}  about={"Automated public lighting systems utilize advanced technology to enhance efficiency, safety, and sustainability in urban environments. These systems incorporate sensors, timers, and network connectivity to dynamically adjust lighting levels based on factors such as ambient light levels, pedestrian or vehicular traffic, and time of day"}/>
 
                </div>
                <div className="gridItems">
                    <Components img={Venti} one_1={"Project Title"} one_2={"Smart Ventilators"} tow_1={"year"} tow_2={"2024"} three_1={"Project Type"} three_2={"Academic Project"} four_1={"Members"} four_2={"3"} about={"DIY smart ventilators represent a groundbreaking innovation in healthcare technology, offering a cost-effective and accessible solution to address the shortage of ventilators during critical situations like the COVID-19 pandemic. These ventilators are designed to be assembled using readily available components and open-source designs, empowering individuals and communities to produce life-saving equipment locally."}/>
                </div>
                
                
                
            </div>
            <FooterTab />

        </>
    )
    
}