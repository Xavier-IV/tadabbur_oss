import {Card} from "@/components/Card";

export default function Home() {
  return (
    <div className="mb-40">
      {/* Promo Section */}
      <div className="w-full px-20 flex justify-between items-end gap-4 bg-green-200">
        <div className="flex flex-col gap-6 py-20">
          <h1 className="text-4xl">Pengembaraan Tadabbur Anda<br/>
            Bermula Di Sini</h1>
          <p>Pengembaraan memahami dan menjelmakan al-Quran,<br/>
            dalam diri bermula di sini. Merungkai makna Kalam Ilahi yang<br/>
            indah demi menambah rasa cinta kepada Pemilik Hati, Allah<br/>
            al-Rahman al-Rahim.
          </p>
          <button className="px-4 py-2 rounded-md w-fit bg-[#02ab9a] text-white">Langgan</button>
        </div>
        <div className="w-80 h-80 bg-red-100 mr-20"></div>
      </div>
      <div className="w-full h-40 -mt-10 overflow-x-clip px-20">
        <div className="overflow-x-auto flex gap-4 pb-3">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col items-start gap-4 px-20">
        <h3 className="text-2xl">Popular</h3>
      </div>

      <div className="h-5"></div>

      <div className="w-full h-40 overflow-x-clip px-20">
        <div className="overflow-x-auto flex gap-4 pb-3">
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
          <Card type={'vertical'}/>
        </div>
      </div>

    </div>
  )
}
