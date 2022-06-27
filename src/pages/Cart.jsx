import React from "react";
import { TbDotsDiagonal } from "react-icons/tb";
import {useCart} from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Cart =()  =>{
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } =useCart()


    if(isEmpty) return <h1 className = "empty-cart text-center">Your Cart is Empty</h1>

    return(
        <section className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className ="cart-header"> Shopping Cart</h1>
                <div className= "row-cartTotal row justify-content-left">
                    <h4>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h4>
                </div>
                    <table className ="table table-light table-hover m-0">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                        <tbody>
                        {items.map((item,index)=>{
                            return(
                                
                            <tr key = {index}>
                                <td>
                                    <img src ={item.image} style = {{height:'6rem'}}/>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                ₱ {item.price}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    Quantity ({item.quantity})
                                </td>
                                <td >
                                    <button  
                                    className = "btn btn-info btn-sm col-sm-offset"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                                    <button 
                                    className = "btn btn-info btn-sm col-sm-offset"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                                    <button 
                                    className = "btn btn-danger btn-sm col-sm-offset"
                                    onClick ={()=> removeItem(item.id)}>Remove Item </button>
                                </td>
                            </tr>
                            )
                            
                        })}
                        </tbody>
                    </table>
                </div>
                <div className ="col-auto">
                    <h2>Total Price: ₱ {parseFloat(cartTotal)}</h2>
                    <div className ="col-16">
                        <button className = "btn btn-danger"
                        onClick ={()=>emptyCart()}> Clear Cart </button>
                        <button className ="btn btn-success">
                                Checkout
                        </button>
                    </div>
                </div>  
            </div>
        </section>
    );
}

export default Cart;
