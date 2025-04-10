import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay (nếu muốn tối nhẹ ảnh nền) */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Overlay trắng mờ (nếu cần) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Card content */}
      <div className="relative bg-white rounded-xl p-8 w-[400px] text-center shadow-lg z-10">
        {/* Badge */}
        <div className="inline-block bg-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Recipe of the day
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-pink-600 mb-3">Salad Caprese</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or
          appetizer.
        </p>

        {/* Avatar & name */}
        <div className="flex items-center justify-center space-x-2 mb-5">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-700">Salad Caprese</span>
        </div>

        {/* Button */}
        <button className="bg-pink-500 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-pink-600 transition">
          View now →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
