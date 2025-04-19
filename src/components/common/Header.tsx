import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
        <Link to="/cart" className="flex items-center">
          <span className="mr-2">Cart</span>
          <span className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;