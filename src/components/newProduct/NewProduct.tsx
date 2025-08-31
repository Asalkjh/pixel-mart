import styled from "./newProduct.module.css";
import photo from "../../assets/images/file_0000000050ac6246bc47c27a00cbdaf2.jpg";
import { Link } from "react-router";


function NewProduct (){


    return(
        <>
        <div className="container">
            <div className={styled.newProduct} >
                <img  src={photo} alt="" />
                <div className={styled.newProductTitle}>
                <h1>new collection</h1>
                <h3>for beautiful women</h3>
                <Link to={"/store"}>
                <span>shop now</span>
                </Link>
                </div>
                
                

            </div>
        </div>
        </>
    )
}

export default NewProduct;