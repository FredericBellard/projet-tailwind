import React from "react";

function Footer() {
  return (
    <div class="bg-slate-100 border-t-2 p-6 flex justify-around mt-4">
      <div class="flex flex-col gap-6">
        <a href="">A propos</a>
        <a href="">Mentions Légales</a>
        <a href="">Contact</a>
        <a href="">Conditions d'utilisation</a>
      </div>
      <div class="flex items-center gap-10">
        <i class="fa-brands fa-instagram fa-2x"></i>
        <i class="fa-brands fa-square-x-twitter fa-2x"></i>
        <i class="fa-brands fa-facebook fa-2x"></i>
      </div>
    </div>
  );
}

export default Footer;
