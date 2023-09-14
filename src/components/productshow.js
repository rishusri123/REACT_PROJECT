import './productshow.css'
import Product from './productlist';
import {useState} from 'react'
import Header from './header'

function ProductShow()
{
   function Test()
   {
    const [cartS,setcartS]=useState([])

    const addeer = (pro)=>{
        if(cartS.find((item)=>item.id === pro.id))
        {
           console.log("already exist")
        }
        else{
            setcartS([...cartS,pro])
        }
  console.log(cartS)
        // 

        // if (cart.some((item) => item.sku === product.sku)){
        //               alert("item is already existed in the cart");
        //                } 
        //                else {
        //                setCart([...cart, product]);
        //                }
    }
    return(
        
       <>
       <Header/>
       {
        Product.map((pro)=>{
            return(
                <>
                <div class="card" width= {"18rem"}>
                <img src={pro.url} width={"40px"} class="card-img-top" alt="..."/>
               <div class="card-body">
                <h5 class="card-title">{pro.name}</h5>
                <p class="card-text">{pro.seller}</p>
                <p class="card-text">{pro.price}</p>
                <button type="button" className="btn btn-primary" onClick={addeer(pro)} >ADD TO CART</button>
           </div>
        </div>
                
                </>
            )
        })
       }
       </>
    );
   }
   return(<Test/>)
}
export default ProductShow;