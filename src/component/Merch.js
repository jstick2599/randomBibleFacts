
import React from "react";
import "../styling/Merch.css";
function merchStore () {
    
  };
const Merch = ({ className }) => {
  return (
    <button className={className} onClick={() => window.location.href = 'https://versefacts-store.printify.me/'}>
      Merch Store
    </button>
  );
};

export default Merch;
