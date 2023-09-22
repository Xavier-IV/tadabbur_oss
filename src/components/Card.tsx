"use client"; // This is a client component 👈🏽

import React, {useEffect, useRef, useState} from "react";
import {Blob} from "@/components/Blob";


type Card = {
  type?: 'normal' | 'vertical',
  title?: string
  subTitle?: string
  image?: string
  border?: boolean
}
export const Card: React.FC<Card> = ({
                                       type = 'normal',
                                       title,
                                       subTitle,
                                       image,
  border = false
                                     }) => {
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
  const containerRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}

      className={`${dimension} ${border ? 'border border-gray-800' : ''} py-1 flex items-center justify-center hover:box-shadow-glow bg-gray-900 rounded-2xl flex-none relative overflow-hidden drop-shadow-2xl`}>
      {image && (
        <>
          <Blob trigger={isMouseInside} x={mousePosition.x} y={mousePosition.y}/>
          <div className="rounded-2xl overflow-hidden absolute h-full w-full z-20 p-0.5">
            <img src={image} className='w-full h-full rounded-2xl' alt=""/>
          </div>
        </>
      )}
      <div className="absolute w-full h-40 bottom-0 z-30 bg-gradient-opacity">
      </div>
      <div className=' absolute w-full z-40 bottom-0 flex flex-col px-4 py-2 rounded-2xl overflow-hidden'>
        <h2 className='text-xs italic'>{subTitle}</h2>
        <h1 className='text-3xl'>{title}</h1>
      </div>
      <Blob zIndex={50} opacity={0.1} trigger={isMouseInside} x={mousePosition.x} y={mousePosition.y}/>
    </div>
  )
}