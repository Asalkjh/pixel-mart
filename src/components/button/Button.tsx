import {  type ComponentProps} from "react";
 

type Tvariant="brown"|"danger"|"secces"|"black";

type TButton = ComponentProps<"button">&{
    variant:Tvariant;
    
    
}




function Button ({children,style,variant,...rest }:TButton ){
    return(
        <>
        <button {...rest} style={{...style,...checkVariant(variant)}} > {children}</button>
        
        
        </>



    )
}

export default Button;

function checkVariant (variant:Tvariant){
    if(variant=== "brown") return{ backgroundColor:"rgb(107, 85, 23)",color:"white"}
    else if (variant==="black") return{backgroundColor:"black", color:"white"}
    else if(variant==="danger")return {backgroundColor:"rgba(177, 34, 29, 1)" , color:"white"}
    else if (variant==="secces") return{backgroundColor:"green" , color:"white"}
}

