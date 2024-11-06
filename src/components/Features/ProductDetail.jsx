// src/components/ProductDetail.jsx
import React, { useState } from "react";
import { FaArrowLeft, FaSearch, FaCartPlus, FaMinus, FaPlus, FaStar } from "react-icons/fa";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mx-auto my-8 p-4">
      {/* Bilah Pencarian */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex w-3/4">
          <input
            type="text"
            placeholder="Cari Menu"
            className="form-control w-full px-4 py-2 rounded-l-full border border-gray-300"
          />
          <button className="px-4 py-2 bg-gray-200 rounded-r-full">
            <FaSearch className="text-gray-600" /> {/* Icon pencarian diperbaiki */}
          </button>
        </div>
        <button className="bg-gray-200 p-2 rounded-full">
          <FaCartPlus className="text-gray-600" />
        </button>
      </div>

      {/* Tombol Kembali */}
      <div className="mb-4">
        <button className="bg-gray-200 p-2 rounded-full">
          <FaArrowLeft />
        </button>
      </div>

      {/* Detail Produk */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/200"
            alt="Gambar Produk"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">Nama Produk</h2>

          <div className="flex justify-between items-center my-2">
            <p className="text-xl font-semibold text-green-600">Rp50,000</p>
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-2" />
              <span>4.5 | 135 Ulasan</span>
            </div>
          </div>

          <p>500 gr | 250 kalori</p>

          {/* Form Tambah ke Keranjang */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <button
                type="button"
                onClick={decrementQuantity}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <FaMinus />
              </button>
              <span className="mx-4 text-lg">{quantity}</span>
              <button
                type="button"
                onClick={incrementQuantity}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <FaPlus />
              </button>
            </div>
            <button className="bg-gray-200 text-black px-4 py-2 rounded-full">
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
