import React from "react";

function Hero() {
  return (
    <div className="w-full relative">
      <div className="w-full h-[350px] bg-blue-300">
        <img
          src="https://picsum.photos/id/46/4000/4000"
          alt="placehold.co"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-black text-center text-2xl p-4 font-extrabold">Projet 1</h1>
    </div>
  );
}

export default Hero;
