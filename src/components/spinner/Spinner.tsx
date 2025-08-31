import styled from "./spinner.module.css";

function Spinner (){
    return(
        <>
        <div className={styled.spinner}>
        <div className={styled.loader}></div>
        </div>
        </>
    )
}

export default Spinner;