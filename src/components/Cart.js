import React from "react";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : 
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.service} />
            <h3>{item.service}</h3>
            <p>${item.price}</p>
            <input 
              type="number" 
              value={item.amount} 
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.amount, 0).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
