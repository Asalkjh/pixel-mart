import { Navigate } from "react-router";
import { UseContext } from "../../context/AppContext";
import { Outlet } from "react-router";




function PriviteRoute (){

const{isLogin}=UseContext()


    return(
        <>
        {isLogin ? <Outlet/> : <Navigate to="/login" /> }
        </>
    );
}

export default PriviteRoute;