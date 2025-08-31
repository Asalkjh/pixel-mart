
import { useEffect, useState } from "react";
import styled from "./popularProduct.module.css";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/type";
import ProductItem from "../productItem/ProductItem";
import { Link } from "react-router";


function Products (){
const[products,setProducts]=useState<IProduct[]>()
    useEffect(()=>{
     getProducts().then(res=>{
        setProducts(res)
      
     })

    },[])

    const popularProduct=products?.filter(item=>item.ispopular ==true).slice(0,4)




    return(
        <>
        <div className="container">
        <h1>محبوب ترین محصولات</h1>
        <div className={styled.products}>
            {
                 popularProduct?.map(item=>
                    <Link to={`/product/${item.id}`}>
                    <ProductItem {...item} />
                    </Link> 
                )
            }
        



          
     
            
         


        </div>
        </div>
        </>
    )
}

export default Products;