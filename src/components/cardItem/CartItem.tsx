import styled from "./cartItem.module.css";
import Button from "../button/Button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/type";
import { UseContext } from "../../context/AppContext";

interface ICartItem{
    id:number;
    qty:number;
}

function CardItem ({id,qty}:ICartItem){

    

const {handleDescreaseProductQty,handleIncreaseProductQty,handleRemoveProduct}=UseContext()

const[product,setProduct]=useState({} as IProduct) 
useEffect(()=>{
    getProduct(id).then((result)=>{
        setProduct(result)

    }).catch((error)=>{
        console.log(error)
    })

,[]})

    return(
        <>
        <div className={styled.cartItem}>
            <div className={styled.cartItemName}>
                <p>{product.title}</p>
                <Link to={`/product/${id}`}><img src={product.image} alt="" /></Link>
            </div>
            <div className={styled.price}><p>{product.price}</p> </div>
            <div  >
                <Button onClick={()=>handleIncreaseProductQty(parseInt(product.id))} style={{margin:" 3px",width:"40px",height:"40px",border:"none",borderRadius:"50%"}} variant="brown">
                    +
                </Button>
                {qty}

                <Button onClick={()=>handleDescreaseProductQty(parseInt(product.id))} style={{margin:"3px",width:"40px",height:"40px",border:"none",borderRadius:"50%"}} variant="brown">
                    -
                </Button>
                <Button onClick={()=>handleRemoveProduct(parseInt(product.id))} style={{margin:"3px",width:"40px",height:"40px",border:"none",borderRadius:"50%"}} variant="danger">
                    حذف


                </Button>

            </div>

         

        </div>
        </>
    )
}

export default CardItem;