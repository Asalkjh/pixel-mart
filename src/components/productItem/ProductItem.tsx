import styled from "./productItem.module.css";
import type { IProduct } from "../../types/type";


function ProductItem ({image,price,title}:IProduct){
    return(
        <>
        <div className={styled.productItem}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{price} :تومان</p>


        </div>
        </>
    )
}

export default ProductItem;