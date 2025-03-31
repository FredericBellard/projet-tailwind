import React from 'react'

function Notice(props) {
  return (
      <div class="bg-white shadow rounded-lg grid grid-cols-2">
        <div class="rounded-lg">
          <img src={props.image} alt="Produit 1" class="w-full h-48 object-cover"/> 
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">{props.nom}</h3>
          <p class="text-gray-600 mt-2">{props.avis}</p>
        </div>
      </div>
  )
}

export default Notice