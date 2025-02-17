import React from "react";
import list from "../data";

const SubscriptionList = ({ addToCart }) => {
  return (
    <div className="subscription-list">
      {list.map((item) => (
        <div key={item.id} className="subscription-item">
          <img src={item.img} alt={item.service} />
          <h3>{item.service}</h3>
          <p>{item.serviceInfo}</p>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionList;
