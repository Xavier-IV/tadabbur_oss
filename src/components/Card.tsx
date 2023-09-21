import React from "react";

export const Card: React.FC<{ type?: 'normal' | 'vertical' }> = ({ type = 'normal' }) => {
  let dimension;
  switch (type) {
    case 'vertical':
      dimension = 'w-60 h-72';
      break;
    default:
    case 'normal':
      dimension = 'w-60 h-40';
      break;
  }
  return <div className={`${dimension} bg-gray-200 rounded-md flex-none`}></div>
}