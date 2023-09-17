import { useState } from "react";

function Cartlist({cartitem})
{
    const[cart,setcart]=useState('')
   
    
    const increase= (i) => {
        const updatedCart = [...cartitem];
        console.log(updatedCart[i].quantity)
        updatedCart[i].quantity += 1;
        // console.log(updatedCart.quantity)
        //  setcart(updatedCart);
        };
        
        const handleQuantityChange = (event, index) => {
         const newQuantity = parseInt(event.target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
             const updatedCart = [...cart];
             updatedCart[index].quantity = newQuantity;
            setcart(updatedCart);
             }
             };

    return( 
        <>
       {
        cartitem.map((item,i)=>{
            return(
                <>
                 <div>
                <img src={item.url} width={50}/>
                 <span><b>{item.name}</b></span>  
                 <input className='input' type="number"  onChange={(event,i) => handleQuantityChange(event,item.id)}/> 
                 <button className="delete" type="button" onClick={increase(i)}>+</button>
                 <b> RS{item.price}</b>/-
                </div>
                </>
            )
        })
       }
       <div>
       <b> total $:</b>
        {
       cartitem.map((item)=>item.price).reduce((previous,next)=>previous + next,0)
        }
       </div>
        </>
    );
}
export default Cartlist