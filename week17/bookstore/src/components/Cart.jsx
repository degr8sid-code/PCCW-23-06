import React, {useState} from "react";

export default function Cart () {
    return (
      <div className='container'>
        <h1 className='p-2'>Cart</h1>
        <div className="row">
        {/* Left side: Item */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Price: $10</p>
              <button className="btn btn-primary">Remove</button>
            </div>
          </div>
        </div>

        {/* Right side: Total */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">Subtotal: $10</p>
              <p className="card-text">Tax: $1</p>
              <h4>Total: $11</h4>
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}