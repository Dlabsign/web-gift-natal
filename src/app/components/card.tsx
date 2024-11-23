import React, { useState, FormEvent, KeyboardEvent } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Image from "next/image";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD88Rwa462eFWKFnEVMrhQqL3PGpguC7c",
  authDomain: "giftcard-8c286.firebaseapp.com",
  databaseURL: "https://giftcard-8c286-default-rtdb.firebaseio.com",
  projectId: "giftcard-8c286",
  storageBucket: "giftcard-8c286.firebasestorage.app",
  messagingSenderId: "65300787647",
  appId: "1:65300787647:web:939a4621310954f432710a",
  measurementId: "G-L4D6G33XTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface WishCardProps {
  nama: string; // Tentukan tipe yang sesuai, misalnya string
}

const WishCard: React.FC<WishCardProps> = ({ nama }) => {
  // State for wishes
  const [wishes, setWishes] = useState<string[]>([""]);
  // State for email
  const [email, setEmail] = useState<string>("");
  // State for popup confirmation
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  // Update the specific wish based on the index
  const handleWishChange = (index: number, value: string) => {
    const newWishes = [...wishes];
    newWishes[index] = value;
    setWishes(newWishes);
  };

  // Add a new wish input when Enter is pressed
  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index === wishes.length - 1 && wishes[index].trim() !== "") {
        setWishes([...wishes, ""]);
      }
    }
  };

  // Delete a specific wish input
  const handleDelete = (index: number): void => {
    const newWishes = wishes.filter((_, i) => i !== index);
    setWishes(newWishes);
  };

  // Show confirmation popup
  const handleConfirmPopup = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  // Save wishes and email to Firestore
  const handleSave = async () => {
    try {
      await addDoc(collection(db, "wishlists"), {
        email,
        wishes,
        nama,
      });
      console.log("Data saved successfully!");
      setEmail("");
      setWishes([""]);
      setIsPopupVisible(false);
      alert("Whistlist berhasil dikirim!");
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full mb-24 ">
      <div className="relative bg-white rounded-xl font-HateYourWriting shadow-lg p-8 max-w-lg w-full text-gray-800 -rotate-3">
        <h2 className="text-5xl font-medium font-HateYourWriting">
          Tulis Wishlistmu di Tahun 2025 <span className="text-4xl">✍️</span>
        </h2>
        <p className="text-gray-400 font-light mb-6 font-HateYourWriting text-3xl">
          ~ Leaders of Youth 03
        </p>
        <form className="space-y-6" onSubmit={handleConfirmPopup}>
          {/* Wishlist Inputs */}
          {wishes.map((wish, index) => (
            <div key={index} className="flex gap-5 items-center">
              <h4 className="text-3xl">{index + 1}</h4>
              <input
                type="text"
                value={wish}
                onChange={(e) => handleWishChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder={`Tulis harapan kamu`}
                className="w-full text-gray-600 italic border-b border-gray-400 pb-1 font-HateYourWriting text-4xl focus:outline-none focus:border-gray-600"
              />
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700 font-bold text-2xl"
              >
                ✖
              </button>
            </div>
          ))}

          <div className="w-full h-[2px] opacity-25 bg-black"></div>

          {/* Email Input */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <label className="text-4xl font-medium" htmlFor="email">
              Kirim Whislistmu
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email kamu"
              className="w-full text-gray-600 italic border-b border-gray-400 pb-2 text-3xl focus:outline-none focus:border-gray-600 text-center"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-4xl mt-4 w-full bg-lime-900 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* Confirmation Popup */}
      {isPopupVisible && (
        <div className="fixed backdrop-blur top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50 font-HateYourWriting  sm:p-20">
          <div className=" p-8 rounded-lg shadow-lg w-full text-center flex flex-col items-center">
            <Image
              src="/postcard.jpg" // Pastikan gambar ini ada di folder /public
              alt="Postcard Preview"
              width={800} // Tambahkan dimensi gambar
              height={600}
              className="w-full max-w-md sm:max-w-lg h-auto object-contain"
            />
            <p className="text-3xl sm:text-5xl mb-4 text-slate-50 py-2 sm:py-5">
              Kirim whistlist Ke 2025?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white text-2xl px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Kirim
              </button>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="bg-red-600 text-white text-2xl px-6 py-2 rounded-lg hover:bg-red-700"
              >
                Ada yang salah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishCard;
