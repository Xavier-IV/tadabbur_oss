import {Card} from "@/components/Card";
import {topics} from "@/data/topics";
import {tadabburs} from "@/data/tadabbur";
import {header} from "@/data/header";
import {Navbar} from "@/components/Navbar";
import React from "react";

export default function Home() {

  return (
    <div className="mb-40">
      {/* Promo Section */}
      <div className="relative w-full h-[500px] flex flex-col">
        <div className="z-10 absolute w-full h-full">
          <img src={header.backgroundImage} className='w-full h-full' alt=""/>
        </div>
        <div className="absolute w-full h-full bottom-0 z-20 bg-gradient-primary"></div>
        <div className="absolute w-full h-full bottom-0 z-20 bg-gradient-primary-to-r"></div>
        <div className="z-30 absolute h-full flex flex-col w-full">
          <Navbar/>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-6 py-20 px-10 md:px-20">
              <h1 className="text-4xl">Pengembaraan Tadabbur Anda<br/>
                Bermula Di Sini</h1>
              <p>Pengembaraan memahami dan menjelmakan al-Quran,<br/>
                dalam diri bermula di sini. Merungkai makna Kalam Ilahi yang<br/>
                indah demi menambah rasa cinta kepada Pemilik Hati, Allah<br/>
                al-Rahman al-Rahim.
              </p>
              <button className="px-4 py-2 rounded-md w-fit bg-[#02ab9a] text-white">Langgan</button>
            </div>
            <div className="hidden md:block mr-20">
              <div
                className="w-80 h-80 bg-red-100 text-gray-800 mr-32 hidden md:flex rounded-md flex-col items-center justify-center">
                <p>Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-40 mt-20 overflow-x-clip md:-mt-10 px-10 md:px-20 z-40">
        <div className="overflow-x-auto flex gap-4 pb-3">
          {
            topics.map((topic, key) => {
              return <Card key={key} image={topic.image} border/>
            })
          }
        </div>
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col items-start gap-4 px-10 md:px-20">
        <h3 className="text-2xl">Popular</h3>
      </div>

      <div className="h-5"></div>

      <div className="w-full h-40 overflow-x-clip px-10 md:px-20">
        <div className="overflow-x-auto flex gap-4 pb-3">
          {
            tadabburs.map((tadabbur, key) => {
              return <Card key={key} type={'vertical'}
                           image={tadabbur.image}
                           subTitle='Tadabbur Surah'
                           title={tadabbur.title}/>
            })
          }
        </div>
      </div>

    </div>
  )
}
