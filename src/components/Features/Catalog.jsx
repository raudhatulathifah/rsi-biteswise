import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";

function Catalog() {
  return (
    <div className="container mx-auto my-10">
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="form-control w-1/2 rounded-full px-4 py-2 border border-gray-300"
          placeholder="Cari Menu"
        />
        <button className="btn btn-outline-secondary rounded-full ml-2 px-4 py-2">
          <FaSearch />
        </button>
      </div>

      {/* Healthy Food Section */}
      <section>
        <div className="flex justify-start items-center mb-3">
          <h2 className="font-bold text-2xl">Healthy Food</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Card Example */}
          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Sop Ayam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Sop Ayam</h5>
              <p className="text-green-600 font-medium">Rp20.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar /> 4.5
                </span>
                <button className="btn btn-success bg-green-600 text-white px-4 py-1 rounded-lg">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>

          {/* Repeat for other products */}
          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Salad Buah"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Salad Buah</h5>
              <p className="text-green-600 font-medium">Rp15.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar /> 4.5
                </span>
                <button className="btn btn-success bg-green-600 text-white px-4 py-1 rounded-lg">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>

          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Salad Sayur"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Salad Sayur</h5>
              <p className="text-green-600 font-medium">Rp22.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar /> 4.5
                </span>
                <button className="btn btn-success bg-green-600 text-white px-4 py-1 rounded-lg">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
