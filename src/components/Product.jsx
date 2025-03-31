import React from "react";

function Product({ productName, productBrand, prix, src }) {
  return (
    <div className="m-10 shadow-lg hover:bg-slate-100 hover:scale-105 transition duration-300 cursor-pointer">
      <div>
        <div className=" w-60 h-80 flex flex-col justify-between">
          <div>
            <img
              src={src}
              alt="placehold.co"
              className="w-full h-40 object-cover"
            />
            <div className="p-6 flex flex-col items-start gap-3">
              <h3 className="font-semibold text-xl">{productName}</h3>
              <h4>{productBrand}</h4>
            </div>
          </div>
          <span className="p-3 font-bold text-xl self-end">{prix + "€"}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
