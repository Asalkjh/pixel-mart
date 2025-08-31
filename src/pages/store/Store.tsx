import styled from "./store.module.css";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import type { IProduct } from "../../types/type";
import { getProducts } from "../../services/api";
import { Link } from "react-router";
import ProductItem from "../../components/productItem/ProductItem";
import Spinner from "../../components/spinner/Spinner";
import { UseContext } from "../../context/AppContext";


function Store (){

const {setIsLoading,isLoading}=UseContext();
const [products,setProducts]=useState<IProduct[]>([])
useEffect(()=>{
setIsLoading(true)    
getProducts().then(result=>{
    setProducts(result)
    setIsLoading(false)
})

},[])







    return(
        <>

        {
isLoading? <Spinner/> : <div> <div className="container">
    <div className={styled.store}>
        {products.map(data=>
        <Link to={`/product/${data.id}`}>
            <ProductItem {...data} />
            </Link>
        )}
    </div>
</div>
<Footer/>
</div>

        }




        
 
        
        
        </>
    )
}

export default Store;