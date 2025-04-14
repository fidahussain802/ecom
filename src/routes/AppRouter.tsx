import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import AddCart from '../pages/AddCart';
import Layout from '../components/common/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="cart" element={<AddCart />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;