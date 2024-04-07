import "./Components.css";

export default function Components({img,one_1,one_2,tow_1,tow_2,three_1,three_2,four_1,four_2,about}) {
    return(
        <>
            <div className="container">
                <div className="img"><img className="img" src={img} alt="" /></div>
                <div  className="info">

                    <div className="description">
                        <h4>{one_1} : {one_2}</h4> 
                    </div>
                    <div className="description">
                        <h4>{tow_1} : {tow_2}</h4>
                    </div>

                    <div className="description">
                        <h4>{three_1} : {three_2}</h4>
                    </div>
                    <div className="description">
                        <h4>{four_1} : {four_2}</h4>
                    </div>
                </div>
                <div className="about"> 
                    <p><b>{about}
                    </b></p>

                </div>
            </div>
        </>
    )
    
}