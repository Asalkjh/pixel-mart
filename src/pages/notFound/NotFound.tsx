import styled from "./notfound.module.css";

function NotFound(){
    return(
        <>
        <div className={styled.notfound}>
            <h1>404</h1>
            <h3>sorry! this page not found</h3>
        </div>
        
        </>

    );

}

export default NotFound;