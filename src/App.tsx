import { Navigate, Route,Routes } from "react-router";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/card/Cart";
import PriviteLogin from "./components/priviteLogin/PriviteLogin";
import Login from "./pages/login/Login";
import { UseContext } from "./context/AppContext";
import SearchProducts from "./pages/serachProducts/SearchProducts";
import NotFound from "./pages/notFound/NotFound";


function App() {
  
  const {isLogin}=UseContext()

  return (
    <>

    
         <Layout>
     <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/search" element={<SearchProducts/>} />
      <Route path="/login" element={isLogin? <Navigate to="/" /> :<Login/>}  />
   <Route element={<PriviteLogin/>}>
      <Route path="/cart" element={<Cart/>}/>
    </Route>

      
    </Routes>
    
 
   </Layout>

    


    
    </>
  )
}

export default App
