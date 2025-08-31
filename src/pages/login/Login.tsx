import { UseContext } from "../../context/AppContext";
import styled from "./login.module.css";
import Button from "../../components/button/Button";
import { setLogin } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";



function Login(){
    const {setIsLogin}=UseContext();

    const[user,setUser]=useState({
        userName:"",
        password:""
    })

    const navigate=useNavigate();

const handleChangeInput=(e :React.ChangeEvent<HTMLInputElement> )=>{
let {name,value}=e.target;

setUser({
    ...user,
    [name]:value,
})
}
 
     const handleLogin = ()=>{
         setLogin(user?.userName as string,user?.password as string).then(res=>{
            // for test
             let token=res.id;
             Cookies.set("token",token)
             setIsLogin(true)
             navigate("/")
         })
         .catch(error=>{
             console.log(error)
         })
 
     
     }
 

   
    return(
        <>
        <div className={styled.login}>
            <h1>ثبت نام |ورود</h1>
            <input onChange={handleChangeInput} type="text" placeholder="نام کاربری" name="userName" />
            <input onChange={handleChangeInput} type="password" placeholder="رمز ورود" name="password" />
            <Button onClick={handleLogin} variant="black">ورود</Button>
            

        </div>
        </>
    )
}

export default Login;