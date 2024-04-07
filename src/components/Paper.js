import NavBar from "./NavBar";
import img from "./certificates/CSWA.jpg"
import Components from "./Components";
import "./CommanGrid.css";
import FooterTab from "./FooterTab"
import img1 from "./certificates/IIT BUBANESHWAR.jpg"
import img2 from "./certificates/CEG Paper Presentation.jpg"
import img3 from "./certificates/IIT Patna.jpg"
import img4 from "./certificates/yugam.jpg"
import img5 from "./certificates/KEC iDEATHON.jpg"
export default function PaperPage() {
    return(
        <>
            <NavBar />
            <div className="gridItemsContainer">
                <div className="gridItems">
                    <Components img={img1} one_1={"College"} one_2={"IIT BUBANESHWAR"} tow_1={"Topic"} tow_2={"Sprinkler Bot"} three_1={"Event"} three_2={"Esummit'23"} four_1={"Name"} four_2={"Inovation Expo"} about={"Irrigation systems require large piping setups along with many sprinklers in order to achieve proper irrigation. This plant irrigation system has many problems associated with it. It requires expensive piping as well as sprinkler costs along with high powered motors in order to drive water through such long pipes. There is always a chance of leakages that may cause an oversupply of water to a particular area and undersupply in another leading to plantation loss. Also, this will incur heavy repairing costs."}/>
                </div>
                <div className="gridItems">
                    <Components img={img2} one_1={"College"} one_2={"CEG"} tow_1={"Topic"} tow_2={"Automated Lighting"} three_1={"Event"} three_2={"Waves'22"} four_1={"Name"} four_2={"Paper Presntation"} about={"Automated public lighting systems utilize advanced technology to enhance efficiency, safety, and sustainability in urban environments. These systems incorporate sensors, timers, and network connectivity to dynamically adjust lighting levels based on factors such as ambient light levels, pedestrian or vehicular traffic, and time of day"}/>
                </div>
                <div className="gridItems">
                    <Components img={img3} one_1={"College"} one_2={"IIT Patna"} tow_1={"Topic"} tow_2={"sprinkler Bot"} three_1={"Event"} three_2={"Esummit'23"} four_1={"Name"} four_2={"Pitch it up your"} about={"Irrigation systems require large piping setups along with many sprinklers in order to achieve proper irrigation. This plant irrigation system has many problems associated with it. It requires expensive piping as well as sprinkler costs along with high powered motors in order to drive water through such long pipes. There is always a chance of leakages that may cause an oversupply of water to a particular area and undersupply in another leading to plantation loss. Also, this will incur heavy repairing costs."}/>
                </div>
                <div className="gridItems">
                    <Components img={img4} one_1={"College"} one_2={"KCT"} tow_1={"Topic"} tow_2={"Smart Bin"} three_1={"Event"} three_2={"Yugam'22"} four_1={"Name"} four_2={"Paper presentation"} about={"Smart bins, also known as intelligent waste bins or smart waste management systems, are innovative solutions that leverage technology to improve waste collection and management processes. These bins are equipped with various sensors, such as fill-level sensors, weight sensors, or even cameras, to monitor the amount of waste inside them in real-time."}/>
                </div>
                <div className="gridItems">
                    <Components img={img5} one_1={"College"} one_2={"KEC"} tow_1={"Topic"} tow_2={"Regenarative EV"} three_1={"Event"} three_2={"KEC-Ideathon'22"} four_1={"Name"} four_2={"Ideathon"} about={"Regenerative electric vehicles (EVs) are a pioneering concept in the automotive industry, aimed at maximizing energy efficiency and minimizing environmental impact. These vehicles utilize regenerative braking technology, which captures and stores energy typically lost during braking or deceleration"}/>
                </div>
                {/* <div className="gridItems">
                    <Components img={img}/>
                </div> */}
                
            </div>
            <FooterTab />

        </>
    )
    
}