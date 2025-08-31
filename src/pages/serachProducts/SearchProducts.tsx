import { useEffect, useState } from "react";
import styled from "./searchProduct.module.css";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/type";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router";
import Spinner from "../../components/spinner/Spinner";

function SearchProducts (){

const [isLoading,setIsLoading]=useState(true)    
const[isSearch,setIsSearch]=useState(false)
const [query,setQuery]=useState("");
const [products,setProducts]=useState<IProduct[]>();


useEffect(()=>{
getProducts().then(result=>{
    setProducts(result)
    setIsLoading(false)

})

},[])

const searchResul = products?.filter(item=>item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) 

console.log(searchResul)
    return(
        <>
        <div className={styled.input}>
            <input onClick={()=> setIsSearch(true)} onChange={(e)=> setQuery(e.target.value) } type="text" placeholder="جستجو محصول " />
            </div>
          <div className="container">
           <div className={styled.search}>
             {
              isLoading ? <Spinner/>  :         isSearch != false ? (      searchResul?.length != 0 ?  (searchResul?.map(item=>
                    <Link to={`/product/${item.id}`}>
                    <ProductItem {...item} />
                    </Link>
                )) : <div className={styled.notFoundProduct}>
                    <h3>محصول مورد نظر شما یافت نشد</h3>
                </div>) : <div className={styled.notFoundProduct} >
                <h3>محصول مورد نظر خود را وارد کنید</h3>
                    </div>
                
            }
            
            </div>
          
            
        </div>
        </>
    );
}

export default SearchProducts;
