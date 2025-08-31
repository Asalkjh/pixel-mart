import { createContext, useContext, useEffect, useState,} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Cookies from "js-cookie";





interface IContextProvider{
    children:React.ReactNode;

    
}

interface ICartItem{
    id:number;
    qty:number;
}

type TIsLogin=boolean;

interface IContext{
    cartItem:ICartItem[];
    handleIncreaseProductQty:(id:number)=>void;
    handleDescreaseProductQty:(id:number)=>void;
    handleRemoveProduct:(id :number)=>void;
    getProductQty:(id : number)=>number;
    getProductsQty:number;
    isLogin:TIsLogin;
    isLoading:boolean;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogOut:()=>void;
    

}





 export const Context=createContext({} as IContext)

 export function UseContext(){
    return useContext(Context)

 }


export function ContextProvider({children}:IContextProvider){
    const [cartItem,setCartItem]= useLocalStorage<ICartItem[]>("cartItem",[])

   
    

    const handleIncreaseProductQty=(id:number)=>{
        setCartItem((prev)=>{
            let selectedItem=prev.find((item)=>item.id == id );
            if(selectedItem == null){
                return[...prev,{id:id, qty:1}];
            }
            else{
             return prev.map((item)=>{
                    if(item.id == id){
                        return {...item , qty : item.qty+1}
                        
                    }
                    else {
                        return item;
                    }


                })
            }
                
            
        })

    }
    const handleDescreaseProductQty=(id :number)=>{
        setCartItem(prev=>{
            let selectedItem=prev.find(item=>item.id==id)
            if(selectedItem?.qty == 1){
                return prev.filter(item=>{item.id != id})
            }
            else{
               return prev.map(item=>{
                    if(item.id==id){
                        return {...item,qty:item.qty-1}
                    }
                    else{
                        return item;
                    }
                })
            }
        })

    }
const handleRemoveProduct=(id:number)=>{
setCartItem((prev)=>{
   return prev.filter((item)=>item.id != id)
}) }

const getProductQty=(id:number)=>{return cartItem.find((item)=>item.id== id)?.qty ||0}

const getProductsQty= cartItem.reduce((totalQty,item)=>{
   return item.qty+totalQty
},0)


 const[isLogin,setIsLogin]=useState<TIsLogin>(false)


 const handleLogOut=()=>{
    Cookies.remove("token")
    setIsLogin(false)
     
    
 }

 useEffect(()=>{
let token=Cookies.get("token")

if(token){
    setIsLogin(true)
}

 },[])

    const[isLoading,setIsLoading]=useState<boolean>(true)

   

    return(
    <Context.Provider value={{cartItem,
        handleIncreaseProductQty,
        handleDescreaseProductQty,
        handleRemoveProduct,
        getProductsQty,
        getProductQty,
        isLogin,
        isLoading,
        setIsLoading,
        setIsLogin,
        handleLogOut

        }}>
        {children}
      
    </Context.Provider>

    );
 }

 

 