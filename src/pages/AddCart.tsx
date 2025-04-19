import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeItem, updateQuantity, clearCart } from '../store/cart';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

function AddCart() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold ">Your Cart</h2>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500">
        <img
          src="./img/cart.png" 
          alt="Empty cart"
          className="w-32 h-32 mb-6"
        />
        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
        <p className="mb-4">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Start Shopping
        </Link>
      </div>
      
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item: CartItem) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-md" 
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end sm:space-x-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded-l hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-t border-b text-center w-12">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded-r hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-700 ml-4 sm:ml-0 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-red-500 hover:text-red-700 px-4 py-2 rounded hover:bg-red-50 transition-colors w-full sm:w-auto text-center"
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold w-full sm:w-auto text-center sm:text-right">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddCart;