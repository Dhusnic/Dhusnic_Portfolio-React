import NavBar from "./NavBar";
import FooterTab from "./FooterTab";
import Components from "./Components";
import autocad from "./certificates/autocad.jpg";
import nptelcloud from "./certificates/nptel cloud computing.jpg";
import npteldip from "./certificates/npteldip.jpg";
import relaylogic from "./certificates/Realay Logic.jpg"
import spac from "./certificates/spac.jpg";
import sakthi from "./certificates/Sakthisugars.jpg";
import "./Home.css";
export default function Courses() {
    return(
        <>
            <NavBar />
            <div className="gridItemsContainer">
                <div className="gridItems">
                    <Components img={autocad} one_1={"Title"} one_2={"AutoCad"} tow_1={"Time Period"} tow_2={"15 Days"} three_1={"Mode"} three_2={"Offline"} four_1={"Skills"} four_2={"2D Designing"} about={"AutoCAD, developed by Autodesk, stands as a cornerstone in computer-aided design (CAD) since its inception in 1982. It has revolutionized various industries by providing professionals like architects, engineers, and drafters with a powerful platform for creating precise 2D and 3D models. Offering an extensive array of tools and functionalities, AutoCAD enables users to design, draft, and document with remarkable accuracy and efficiency. Notable features include parametric drawing, which allows users to maintain object relationships for easy modifications, and a vast library of commands that can be customized to suit specific workflow requirements. "}/>
                </div>
                <div className="gridItems">
                    <Components img={relaylogic} one_1={"Title"} one_2={"Relay Logics"} tow_1={"Time Period"} tow_2={"30 Days"} three_1={"Mode"} three_2={"Offline"} four_1={"Skills"} four_2={"Logic building in relays"} about={"Relay logic is a fundamental concept in electrical engineering and automation, involving the use of electromechanical relays to control various industrial processes. These relays act as switches, responding to electrical signals to open or close circuits, thereby controlling the flow of current and enabling the automation of complex systems. One of the key advantages of relay logic is its reliability, as electromechanical relays are robust and capable of enduring harsh industrial environments. Relay logic circuits are often used in applications where simple control systems are sufficient, such as in motor starters, lighting controls, and safety interlocks"}/>
                </div>
                <div className="gridItems">
                    <Components img={nptelcloud} one_1={"Title"} one_2={"Cloud Computing"} tow_1={"Time Period"} tow_2={"3 Months"} three_1={"Mode"} three_2={"Online"} four_1={"Skills"} four_2={"Cloud Computing"} about={"Cloud computing has revolutionized the way businesses and individuals access, store, and manage data and applications. At its core, cloud computing involves the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet, offering scalability, flexibility, and cost-effectiveness. With cloud computing, users can access resources on-demand, paying only for what they use, thus eliminating the need for upfront infrastructure investment and reducing operational expenses. This technology enables organizations to rapidly deploy applications and services, speeding up innovation and time-to-market."}/>
                </div>
                <div className="gridItems">
                    <Components img={npteldip} one_1={"Title"} one_2={"Digital Image Processing"} tow_1={"Time Period"} tow_2={"3 Months"} three_1={"Mode"} three_2={"Online"} four_1={"Skills"} four_2={"Image Processing"} about={"Digital image processing is a field of study and practice that involves the manipulation and analysis of digital images using various algorithms and techniques. It encompasses a wide range of applications, including medical imaging, satellite imagery analysis, surveillance, remote sensing, and digital photography enhancement. In digital image processing, images are processed to improve their quality, extract useful information, and make them suitable for specific tasks or applications. Common operations include image enhancement, which improves visual quality by adjusting brightness, contrast, and sharpness, and image restoration, which aims to remove noise or blur introduced during image acquisition or transmission."}/>
                </div>
            </div>
            <div className="title"><span className="title_first">I</span><span className="title_second">nplant</span><span className="title_first">T</span><span className="title_second">raining</span></div>
            <div className="gridItemsContainer">
                <div className="gridItems">
                    <Components img={spac} one_1={"Company"} one_2={"SPAC"} tow_1={"Product"} tow_2={"Starch"} three_1={"Time Period"} three_2={"1 Day"} four_1={"Place"} four_2={"Erode"} about={"SPAC Starch Production Company is a leading manufacturer in the starch industry, renowned for its high-quality products and innovative processes. Founded with a commitment to excellence, SPAC has established itself as a key player in the global starch market. The company specializes in the production of various starch derivatives, including corn starch, potato starch, and tapioca starch, catering to diverse industrial and consumer needs. With state-of-the-art facilities and advanced technologies, SPAC ensures superior product consistency and purity, meeting stringent quality standards."}/>
                </div>
                <div className="gridItems">
                    <Components img={sakthi} one_1={"Company"} one_2={"Sakthi Sugars"} tow_1={"Product"} tow_2={"Sugar"} three_1={"Time Period"} three_2={"1 Day"} four_1={"Place"} four_2={"Erode"} about={"Sakthi Sugars is a prominent name in the sugar industry, recognized for its extensive operations and commitment to quality. Established with a vision to deliver excellence, Sakthi Sugars has grown into a leading producer of sugar and related products. The company's state-of-the-art manufacturing facilities utilize advanced technology and efficient processes to ensure the highest standards of quality and purity in its products. Sakthi Sugars specializes in the production of various types of sugar, including white sugar, brown sugar, and specialty sugars, catering to diverse market demands. "}/>
                </div>
            </div>
            <FooterTab/>
        </>
    )
}