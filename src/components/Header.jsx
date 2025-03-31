import React from 'react'

function Header() {
  return (
    <div class="bg-gray-800 text-white py-4">
    <div>
      <h1>Mon E-commerce</h1>
    </div>
    <div class="flex flew-row justify-around gap-4">

      <button class="border-4 border-solid">Accueil</button>     
      <button>Panier</button>     
      <button>Se connecter</button>
      </div>
  </div>
  )
}

export default Header