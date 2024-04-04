import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";

export default function Navbar(){
    return(
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
      </>
    )
}