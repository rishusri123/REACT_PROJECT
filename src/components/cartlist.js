import { useEffect, useState } from "react";

function Cartlist(props)
{
   // console.log(props)
    //const[cart,setcart]=useState([])

    const[CART,setCART]=useState([])
    

    useEffect(()=>{
        setCART(props.cartitem)
    },[props.cartitem])

// FOR REMOVE ITEM FROM CART

   const Remove = (item)=>{
    console.log(item)
    const del = CART.filter(del=>del.id!==item.id);
    props.data(del)
   }



    return( 
        <>
       {
        CART.map((item,index)=>{
            // console.log(item)
            return(
                <>
                 <div>
        <img src={item.url} width={50}/>  
         <span><b>{item.name}</b></span>  
                 <button type="button"
                      onClick={()=>{
                         const abc = CART.map((newitem,newindex)=>{   
                           return index === newindex && item.quantity>1 ? {...newitem, quantity: newitem.quantity -1} : newitem 
                     })
                   setCART(abc)
                 }}>-</button>

         <span><b>{item.quantity}</b></span>

                 <button onClick={()=>{
                       const abc = CART.map((newitem,newindex)=>{   
                          return index === newindex  ? {...newitem, quantity: newitem.quantity +1} : newitem 
                       })
                     setCART(abc)
                 }}
                 >+</button> 
                 <b> RS{item.price * item.quantity}</b>/-
                 <button className="btn btn-danger"onClick={()=>Remove(item)}>REMOVE</button>
                </div>
                </>
            )
        })
       }
       <div>
       <b> total $:</b>
        {
     CART.map((item)=>item.price * item.quantity).reduce((previous,next)=>previous + next,0)
        }
       </div>
        </>
    );
}
export default Cartlist