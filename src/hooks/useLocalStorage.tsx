import { useEffect, useState } from "react";

 export function useLocalStorage <T>(key:string,initialValue:T){
    const [value,setValue]=useState<T>(()=>{
        let localItem= localStorage.getItem("cartItem")
        if(localStorage != null){
            return JSON.parse(localItem as string)
        }
        else{
            return initialValue 
        }

    

    })

        useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(value))

        },[key,value]);

    return [value,setValue] as [typeof value,typeof setValue]

}