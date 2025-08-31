import styled from "./navbar.module.css";
import { Link } from "react-router";
import pic from "../../assets/images/shopping-bag.png";
import { UseContext } from "../../context/AppContext";
import pic2 from "../../assets/images/magnifying-glass.png";


function Navbar (){

    const {getProductsQty,handleLogOut,isLogin}=UseContext()
    
    return(
        <>
        <div className="container">
        <div className={styled.navbar}>
            <ul className={styled.navbarList} >
                <Link to={"/"} > <li>خانه</li></Link>
                <Link to={"/store"}>  <li>فروشگاه</li></Link>
                {isLogin?<li className={styled.exit}><button onClick={handleLogOut}>خروج</button></li>: ""}
               
              <div className={styled.cartShop}>
              <Link to={"/cart"}> <li> <img src={pic} alt="" /> </li></Link> 
              {getProductsQty !== 0 ? <div className={styled.qty}>{getProductsQty}</div> :""}
              </div>
              <div className={styled.search}>
               <Link to={"search"}> <li><img src={pic2} alt="" /></li> </Link>
              </div>
            </ul>
            <div><span><h1>pixelMart</h1></span></div>
        </div>
        </div>
        
        
        </>
    )
}
export default Navbar;
