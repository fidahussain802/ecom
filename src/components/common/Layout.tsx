import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        © 2025 E-Commerce Store
      </footer>
    </div>
  );
}

export default Layout;