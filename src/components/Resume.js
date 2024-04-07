import "./ResumePage.css";
import "./CommanGrid.css";

export default function Resume({img,pdf}) {
    function download(data)
    {
        const link=document.createElement("a");
        link.href=data;
        link.target="_blank";
        link.download="Resume_DHUSNIC_INFANT_D_M";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }   
    function open(data) {
        const a=document.createElement( 'A' );
        a.href = data ;
        window.open(a.href); 
        
    }
    return(
        <>

            <div className="resumeImgDiv">
                <div className="imgDiv"><img src={img} className="resumeimg"alt="" /></div>
                <div className="button">
                    <div><button className="downButton" onClick={()=>download(pdf)}>Download</button></div>
                    <div><button className="downButton" onClick={()=>open(pdf)}>View/Print</button></div>
                </div>
            </div>
        </>
    )
}