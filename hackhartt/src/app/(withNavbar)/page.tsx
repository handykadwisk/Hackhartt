import Image from "next/image";
import Link from "next/link";
import { BsPersonFill } from 'react-icons/bs'

export default function Home() {
  return (
    <>

      <div className=" bg-white">
        <a className="btn btn-ghost text-l">CARHARTT REWORKED |</a>
        <a className="btn btn-ghost text-l">
          CARHARTT FOR BUSINESS</a>
      </div>
      <div className="h-10 bg-black text-yellow-600 text- p-2 item text-center">
        <a href="">OUTWORK EVERY DAY OF SPRING SHOP NOW</a>
      </div>
      <div >
      <div className="navbar h-10 bg-white text-gray-600 p-2 justify-center ">
      <BsPersonFill size={24} />
        <Link href={"/login"} className="mr-2">LOGIN |</Link>
        <Link href={"/register"}>REGISTER</Link>
        </div>
      </div>
      
      


      <div className="mr-2 ml-2 p-10 ">
        <img src="https://res.cloudinary.com/hartville-hardware/image/upload/c_scale,f_auto,h_450,q_auto,w_600/v1681845806/marketing/Carhartt_Header_Mobile_2.png"
          className="h-96 w-full rounded-3x" />
      </div>
{/*       
      <div className="carousel carousel-end rounded-box mt-5 w-32 h-40 items-center mr-2 ml-16 relative">
        <div className="carousel-item">
          <img src="https://images-cdn.ubuy.co.id/643c240f66659a6901463fab-carhartt-men-039-s-duck-detroit-jacket.jpg"
            className="obejct-cover"
            alt="Drink" />
        </div>
      </div>
      <div className="carousel carousel-end rounded-box mt-5 w-96 h-40 items-center mr-2 ml-16 relative">
        <div className="carousel-item">
          <img src="https://images-cdn.ubuy.co.id/643c240f66659a6901463fab-carhartt-men-039-s-duck-detroit-jacket.jpg"
            className="obejct-cover"
            alt="Drink" />
        </div>
      </div>
      <div className="carousel carousel-end rounded-box mt-5 h-40 items-center mr-2 relative">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
        </div>
      </div>
      <div className="carousel carousel-end rounded-box mt-5 h-40 items-center mr-2 relative">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
        </div>
      </div>
      <div className="carousel carousel-end rounded-box mt-5 h-40 items-center mr-2 relative">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
        </div>
      </div> */}

      
    </>
  );
}
