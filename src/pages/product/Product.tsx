import styled from"./product.module.css";
import Button from "../../components/button/Button";
import type { IProduct } from "../../types/type";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { UseContext } from "../../context/AppContext";


function Product (){
    const params=useParams<{id:string}>();
   const [Product,setProduct]=useState<IProduct>()

    useEffect(()=>{
        getProduct(params.id as string).then(result=>{
            setProduct(result)

        })
        .catch(error=>{
            console.log(error);
        })

    },[])

    const {handleIncreaseProductQty,cartItem,handleDescreaseProductQty,handleRemoveProduct,getProductQty}=UseContext()
    console.log(cartItem)



    return(
        <>
        <div className="container">
        <div className={styled.product}>
       <img src={Product?.image} alt="" />
       <div className={styled.productDes}>
        <h1>{Product?.title}</h1>
        <h3> {Product?.price} :قیمت</h3>
        <p>{Product?.description}</p>
        <div className={styled.but}>
         {
            getProductQty(parseInt(params.id as string)) === 0 ? <Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))} style={{padding:"10px 20px",borderRadius:"10px"}} variant="black">افزودن به سبد خرید</Button>
            :
 
           <div>
          <Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}   style={{border:"none",height:"40px",width:"40px",margin:"3px",borderRadius:"50%"}}  variant="brown">+</Button>
           {getProductQty(parseInt(params.id as string))}
          <Button onClick={()=>handleDescreaseProductQty(parseInt(params.id as string))}   style={{border:"none",height:"40px",width:"40px",margin:"3px",borderRadius:"50%"}}  variant="brown">-</Button>
          <Button onClick={()=>handleRemoveProduct(parseInt(params.id as string))}   style={{border:"none",height:"40px",width:"40px",margin:"3px",borderRadius:"50%"}}  variant="danger">حذف</Button>

           </div>
         }


         </div>
       </div>
        </div>
        </div>
        
        </>
    )
}

export default Product;