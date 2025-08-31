import styled from "./footer.module.css";
import pic from "../../assets/images/instagram.png";

function Footer (){
    return(
        <>
        <div className="container">
        <div className={styled.footer}>
            <h3>FOLLOW US</h3>
            
            <span><img src={pic} alt="" /></span>
            <span>@pixel-mart</span>
            

        </div>
        </div>
        </>
    )
}

export default Footer;