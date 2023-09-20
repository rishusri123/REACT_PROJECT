import './productshow.css'
import Product from './productlist';
import {useState} from 'react'
import Header from './header'
import Cartlist from './cartlist';

function ProductShow()
{
   
    const [cart,setcart]=useState([])
    
    const addtocart = (pro)=>{
        
         // console.log(pro)
        if(cart.some((item)=>item.id===pro.id))
        {
            alert("PRODUCT ALREADY EXITS  IN YOUR'S CART")
        //    console.log("already exist")
        }
        else{
            // alert("PRODUCT ADDED IN YOUR'S CART")
            setcart([...cart,pro])
        }

    
 
    }

    const del = (del)=>{
        setcart(del)
    }
    return(
       <>
       <Header count={cart.length}/>
       <Cartlist cartitem={cart} data={del}/>
       {
        Product.map((pro)=>{
            return(
                <>
                <div className="card" width= {"18rem"}>
                <img src={pro.url} width={"40px"} className="card-img-top" alt="..."/>
               <div className="card-body">
                <h5 className="card-title"><b>{pro.name}</b></h5>
                <p className="card-seller"><b>{pro.seller}</b></p>
                <p className="card-price"><b>{pro.price}</b></p>
                <button type="button" classNameName="btn btn-info" onClick={()=>addtocart(pro)} >ADD TO CART</button>
           </div>
        </div>   
                </>
            )
        })
       }
      
       </>
    );
   

}
export default ProductShow;