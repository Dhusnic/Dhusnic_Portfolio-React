import NavBar from "./NavBar";
import img from "./dhusnic.jpg";
import img1 from "./dhusnic2.png"
import "./Home.css";
import img2 from "./dhusnic_two.jpg";
import FooterTab from "./FooterTab"
export default function HomePage() {
    return(
        <>
        
            <NavBar />
            <div className="home">
                
                <div className="component">
                    <div className="intro">
                        <div className="introAbout">
                            <div>
                                <div className="title"><span className="title_first">H</span><span className="title_second">EllO  </span><span className="title_first">E</span><span className="title_second">VERYONE</span></div>
                                <br/>
                                <div className="descrip">
                                    <p>Hello I am Dhusnic Infant, I am Mechatronic engineering student skilled in 
                                        hard-software integration seeking a software developer role. 
                                        Proficient in programming languages like C ,Java. 
                                        Capable of handling problems in DSA and full stack Web Development.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="img_container">
                            <img className="introImg"src={img} alt=""/> 
                        </div>
                    </div>

                    
                    <div className="aboutComponent">
                        

                            <div className="img_container">
                                <img className="aboutImg"src={img2} alt=""/> 
                            </div>
                            <div className="aboutComponentAbout">
                                <div>

                                <div className="title"><span className="title_first">A</span><span className="title_second">BOUT</span></div>
                                <br/>
                                <div className="descrip">I always wonder about the 
                                accuracy and precision produced by the machines which drive 
                                my intrest in converting the physical world parameters into
                                digital data and manuplating it. which is used in Automation , IoT etc.
                                That reduced Human Efforts, How Amazing right lets take this next Level for next Generations.
                                <p>
                                     
                                </p></div>
                                </div>
                            </div>

                    </div>


                    <div className="skills">
                        

                            
                        <div className="skillsAbout">
                            <div>

                                <div className="title"><span className="title_first">L</span><span className="title_second">INKS</span></div>
                                <br/>
                                <div className="webCards">
                                   <div className="leetcode"> <iframe className="leetcodeCard" title="leetcode" src="https://leetcard.jacoblin.cool/DHUSNIC_INFANT_DM?theme=dark&font=Big%20Shoulders%20Display&ext=heatmap" /></div>
                                    <div className="github"><a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=Dhusnic&theme=dark" alt="GitHub Streak"  className="gitCard"/></a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                   

                </div>

            </div>
            <FooterTab/>
        
        
        </>
            
        
    )
    
}