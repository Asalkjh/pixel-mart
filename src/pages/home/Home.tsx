import NewProduct from "../../components/newProduct/NewProduct";
import Products from "../../components/products/PopularProduct";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/aboutUs/AboutUs";
import { useEffect, useState } from "react";
import type { IProduct } from "../../types/type";
import { getProduct } from "../../services/api";



function Home (){

    const[products,setProducts]=useState<IProduct[]>([])

    useEffect(()=>{
        getProduct().then(result=>{
            setProducts(result)
        })

    },[])

    

    return(
        <>
        <NewProduct/>
        <Products/>
        <AboutUs/>

        <Footer/>

        
        
        
        </>

    )
}
export default Home;