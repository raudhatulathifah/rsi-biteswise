// src/components/ShoppingCart.jsx
import React, { useState } from 'react';
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import CartItem from './CartItem'; // Import komponen CartItem

function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(20000);

  // Fungsi untuk mengubah total harga ketika kuantitas berubah
  const handleTotalChange = (change) => {
    setTotalPrice((prevTotal) => prevTotal + change);
  };

  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-gray-100 rounded-full">
            <FaArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h4 className="text-xl font-bold">Shopping Cart</h4>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="w-72 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
            placeholder="Cari Pesanan"
          />
          <button className="p-2 bg-gray-100 rounded-r-full">
            <FaSearch className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow mb-5">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-center w-5"></th>
              <th className="p-3 text-left">Produk</th>
              <th className="p-3 text-center">Harga Satuan</th>
              <th className="p-3 text-center">Kuantitas</th>
              <th className="p-3 text-center">Total Harga</th>
              <th className="p-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              name="Sop Ayam"
              image="https://via.placeholder.com/100"
              price={20000}
              initialQuantity={1}
              onTotalChange={handleTotalChange}
            />
            {/* Tambahkan CartItem lainnya jika diperlukan */}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <div className="flex justify-end items-center space-x-4">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-green-600 font-semibold text-2xl">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700">
            Buat Pesanan
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
