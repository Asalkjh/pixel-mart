import styled from"./cart.module.css";
import CartItem from "../../components/cardItem/CartItem";
import { UseContext } from "../../context/AppContext";


function Cart (){

    const{cartItem}=UseContext();

    
    
    


    return(
        <>
       <div className="container">
            <div className={styled.cartTitle}>

               <div className={styled.nameProduct}> <h3>نام محصول</h3> </div>
                <div className={styled.price}> <h3 >قیمت</h3> </div>
                
                

            </div>
            {
                cartItem.map((item)=>{
                  return  <CartItem {...item} />
                })
            }
      
    

            
        

        </div>
        </>
    )
}

export default Cart;