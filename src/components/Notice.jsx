import React from "react";

function Notice({ image, nom, description }) {
  return (
    <div class=" w-[300px] h-[200px] m-6 p-4 rounded-lg flex flex-row items-center border-2 shadow-md  hover:bg-slate-100 hover:scale-105 transition duration-300 cursor-pointer">
      <div class="flex flex-col w-1/2 gap-4 justify-center items-center">
        <img src={image} alt="" class="rounded-full  h-[100px] w-[100px]" />
        <p class="text-lg underline">{nom}</p>
      </div>

      <p class="p-4">{description}</p>
    </div>
  );
}

export default Notice;
