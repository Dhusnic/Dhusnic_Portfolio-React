import NavBar from "./NavBar";
import img from "./certificates/CSWA.jpg"
import Components from "./Components";
import ComponentSkills from "./ComponentSkills";
import "./CommanGrid.css";
import FooterTab from "./FooterTab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "./certificates/SolidWorks.jpg"
import {faInstagram,faGithub,faLinkedin, faAndroid, faHtml5, faCss3, faJs, faReact, faJava  } from "@fortawesome/free-brands-svg-icons";
import { faC, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./FooterTab.css"
import img2 from "./certificates/labview.png"
export default function SkillPage() {
    return(
        <>
            <NavBar />
            <div className="gridItemsContainer">
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faHtml5} className="iconLogo" />} one_1={"Name"} one_2={"HTML5"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"3 years"} four_1={"Domain"} four_2={"FrontEnd"} about={"HTML5 is the latest iteration of the Hypertext Markup Language, the standard language used to create and design web pages and applications. It offers several enhancements and new features compared to its predecessors, making it more versatile, efficient, and capable of supporting modern web development practices. "}/>
                </div>
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faCss3} className="iconLogo" />} one_1={"Name"} one_2={"CSS3"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"3 years"} four_1={"Domain"} four_2={"FrontEnd"} about={"CSS3, the latest evolution of Cascading Style Sheets, has revolutionized web design by introducing a plethora of powerful features and enhancements. With CSS3, developers can craft visually stunning and highly interactive web experiences that rival the capabilities of native applications. One of the most significant advancements is the introduction of media queries, enabling responsive design that adapts seamlessly to various screen sizes and devices. Flexbox and CSS Grid Layout further streamline layout creation, offering precise control over elements' positioning and alignment"}/>
                </div>  
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faJs} className="iconLogo" />} one_1={"Name"} one_2={"JAVA SCRIPT"} tow_1={"Level"} tow_2={"Beginner"} three_1={"Experience"} three_2={"1 year"} four_1={"Domain"} four_2={"FrontEnd"} about={"JavaScript (JS) is a high-level, versatile programming language primarily used for client-side web development. Renowned for its ability to add interactivity and dynamism to web pages, JS plays a crucial role in shaping the modern web experience. Its versatility extends beyond the client-side, with frameworks like Node.js enabling server-side development as well. JavaScript facilitates the creation of interactive elements, animations, form validations, and more, seamlessly integrating with HTML and CSS"}/>
                </div>
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faReact} className="iconLogo" />} one_1={"Name"} one_2={"React"} tow_1={"Level"} tow_2={"Beginner"} three_1={"Experience"} three_2={"1 year"} four_1={"Domain"} four_2={"Frame Work"} about={"React is a powerful JavaScript library for building user interfaces, renowned for its simplicity, efficiency, and flexibility. Developed and maintained by Facebook, React has gained widespread adoption in the web development community for its component-based architecture and declarative approach to building UIs. At the core of React's design is the concept of reusable components, which encapsulate UI elements and their behavior, promoting code modularity and maintainability."}/>
                </div>
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faC} className="iconLogo" />} one_1={"Name"} one_2={"C"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"3 years"} four_1={"Domain"} four_2={"Programing & DSA"} about={"C is a powerful and versatile programming language that has been widely used since its creation in the early 1970s. Renowned for its efficiency, portability, and low-level features, C has influenced the development of numerous other programming languages and remains a cornerstone of modern computing. Its simplicity, combined with its ability to directly access hardware and memory, makes it well-suited for system programming, operating systems, embedded systems, and applications where performance is critical."}/>
                </div>
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faJava} className="iconLogo" />} one_1={"Name"} one_2={"Java"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"2 years"} four_1={"Domain"} four_2={"Programing & DSA"} about={"Java is a versatile and widely-used programming language known for its platform independence, object-oriented principles, and robust ecosystem. Initially developed by Sun Microsystems in the mid-1990s, Java has since become a mainstay in various domains, including enterprise software development, web development, mobile app development, and large-scale distributed systems. One of Java's key strengths is its 'write once, run anywhere' mantra, made possible by the Java Virtual Machine (JVM), which allows Java programs to run on any device or operating system that supports the JVM."}/>
                </div>
                <div className="gridItems">
                    <ComponentSkills img={<FontAwesomeIcon icon={faGithub} className="iconLogo" />} one_1={"Name"} one_2={"Git Hub"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"2 years"} four_1={"Domain"} four_2={"Tools"} about={"GitHub is a widely-used platform for version control and collaborative software development, providing developers with tools for hosting, reviewing, and managing code repositories. Founded in 2008, GitHub has become an essential tool for individual developers, teams, and organizations worldwide. At its core, GitHub utilizes the Git version control system, allowing developers to track changes to their code, collaborate with others, and manage project histories effectively. One of GitHub's key features is its web-based interface, which enables users to browse, fork, and clone repositories, as well as to submit pull requests for code review and collaboration. "}/>
                </div>
                <div className="gridItems">
                    <Components img={img1} one_1={"Name"} one_2={"HTML5"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"3 years"} four_1={"Domain"} four_2={"3D Modaling"} about={"SolidWorks is a leading computer-aided design (CAD) software package renowned for its powerful capabilities in 3D modeling, simulation, and engineering design. Developed by Dassault Systèmes, SolidWorks has become a cornerstone tool for engineers, designers, and manufacturers across various industries. Its intuitive user interface and extensive suite of features enable users to create intricate 3D models of mechanical components, assemblies, and complex systems with ease. SolidWorks offers a wide range of tools for parametric modeling, allowing users to quickly iterate and refine designs while maintaining design intent and flexibility."}/>
                </div>
                <div className="gridItems">
                    <Components img={img2} one_1={"Name"} one_2={"HTML5"} tow_1={"Level"} tow_2={"Intermediate"} three_1={"Experience"} three_2={"3 years"} four_1={"Domain"} four_2={"Graphical Programing"} about={"LabVIEW, short for Laboratory Virtual Instrument Engineering Workbench, is a powerful graphical programming environment designed for measurement and automation tasks in various scientific and engineering disciplines. Developed by National Instruments, LabVIEW is renowned for its intuitive visual programming language, which uses graphical icons and wires to represent code elements, making it accessible even to those without extensive programming experience. LabVIEW's modular and scalable architecture allows users to quickly develop complex measurement and control systems by simply dragging and dropping pre-built function blocks, called virtual instruments (VIs), onto a graphical user interface (GUI)."}/>
                </div>
                
            </div>
            <FooterTab />

        </>
    )
    
}