"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const categories = [
  { name: "All", count: 116 },
  { name: "Pizza", count: 20 },
  { name: "Burger", count: 15 },
  { name: "Chicken", count: 10 },
  { name: "Bakery", count: 18 },
  { name: "Beverage", count: 12 },
  { name: "Seafood", count: 16 },
];

const tabs = ["Normal Menu", "Special Deals", "New Year Special", "Desserts and Drinks"];

export default function MenuPage() {
  return (
    <div className="p-4 text-white bg-gray-900">
      <header className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold">Menu</h1>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-3 md:p-4 rounded-lg flex flex-col items-center justify-center w-24 md:w-32 text-center hover:bg-gray-700"
            >
              <p className="text-pink-500 font-bold text-sm md:text-lg">{category.name}</p>
              <span className="text-gray-400 text-xs md:text-sm">{category.count} items</span>
            </div>
          ))}
          <button className="bg-pink-500 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-white text-sm md:text-base">
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            Add Category
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Special menu all items</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-md text-xs md:text-sm ${
                index === 0 ? "bg-pink-500 text-white" : "bg-gray-800 text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <table className="w-full bg-gray-800 text-sm rounded-lg overflow-hidden text-left">
          <thead className="bg-gray-700 text-xs md:text-sm">
            <tr>
              <th className="p-2 md:p-4">Product</th>
              <th className="p-2 md:p-4">Product Name</th>
              <th className="p-2 md:p-4">Item ID</th>
              <th className="p-2 md:p-4">Stock</th>
              <th className="p-2 md:p-4">Category</th>
              <th className="p-2 md:p-4">Price</th>
              <th className="p-2 md:p-4">Availability</th>
              <th className="p-2 md:p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <tr key={index} className="hover:bg-gray-700 text-xs md:text-sm">
                  <td className="p-2 md:p-4">
                    <Image
                      src="/placeholder.png"
                      alt="Product"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="p-2 md:p-4">Idali Sambar</td>
                  <td className="p-2 md:p-4">1</td>
                  <td className="p-2 md:p-4">5 items</td>
                  <td className="p-2 md:p-4">Idali</td>
                  <td className="p-2 md:p-4">$55.00</td>
                  <td className="p-2 md:p-4 text-green-500">In Stock</td>
                  <td className="p-2 md:p-4 flex gap-2">
                    <button className="text-pink-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
