import React from "react";

function Header({ lien1, lien2, lien3, lien4 }) {
  return (
    <nav class="bg-slate-100 p-3 flex justify-between sticky top-0 z-10">
      <img src="https://picsum.photos/id/146/50/50" alt="logo" />
      <div class="flex flex-wrap gap-14 items-center">
        <a href="#produits" class="border border-black p-1">
          {lien1}
        </a>
        <a href="#temoignages" class="border border-black p-1">
          {lien2}
        </a>
        <a href="#" class="border border-black p-1">
          {lien3}
        </a>
        <a href="#" class="border border-black p-1">
          {lien4}
        </a>
      </div>
    </nav>
  );
}

export default Header;
