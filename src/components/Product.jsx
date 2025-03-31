import React from 'react'

function Product(props) {
  return (
   
    


      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img src={props.image} alt="Produit 1" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">Produit 1</h3>
          <p class="text-gray-600 mt-2">Description du produit 1.</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-gray-800 font-bold">€20</span>
            <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Acheter</button>
          </div>
        </div>
      </div>

  )
}

export default Product