import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full bg-white h-[60px] sticky top-0 flex justify-between py-4 px-8">
    <Image src="/logo-black.png" alt="test" width={60} height={40}/>
    <div className="text-black flex items-center gap-10">
      <a className="cursor-pointer">Salon</a>
      <a className="cursor-pointer">Tarifs</a>
      <a className="cursor-pointer">Contact</a>
    </div>
  </div>
  );
}