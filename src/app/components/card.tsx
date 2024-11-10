import React, { useState } from "react";

const WishCard = () => {
  // State to hold the user's wishes
  const [wishes, setWishes] = useState(["", "", ""]);

  // Update the specific wish based on the index
  const handleWishChange = (index: number, value: string) => {
    const newWishes = [...wishes];
    newWishes[index] = value;
    setWishes(newWishes);
  };

  return (
    <div className="flex justify-center items-center -rotate-3 w-full  mb-24">
      <div className="relative bg-white rounded-xl font-HateYourWriting shadow-lg p-8 max-w-lg w-full text-gray-800">
        {/* Heading */}
        <h2 className="text-5xl font-medium font-HateYourWriting ">
          Tulis keinginan di tahun 2025 <span className="text-4xl">✍️</span>
        </h2>
        <p className="text-gray-400 font-light mb-6 font-HateYourWriting text-3xl">
          ~ Leaders of Youth 03
        </p>

        {/* Input fields for wishes */}
        <form className="space-y-4">
          {wishes.map((wish, index) => (
            <input
              key={index}
              type="text"
              value={wish}
              onChange={(e) => handleWishChange(index, e.target.value)}
              placeholder="..."
              className="w-full text-gray-600 italic border-b border-gray-400 pb-1 font-HateYourWriting text-4xl focus:outline-none focus:border-gray-600"
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default WishCard;
