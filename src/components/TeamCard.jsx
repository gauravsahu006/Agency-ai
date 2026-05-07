import React from "react";

export default function TeamCard({ name, title, image }) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-blue-950  px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ">
      
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Info */}
      <div className="text-left">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-xs text-gray-500 dark:text-white/60">{title}</p>
      </div>
    </div>
  );
}