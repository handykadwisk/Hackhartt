"use client";
import { Cookie } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import LogoutButton from "./Logout";

export default function Navbar(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const accessToken = getCookie('Authorization');
    setIsLoggedIn(accessToken ? true : false);
  }, []);


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
          {isLoggedIn ? (
                            <>
                                <li>
                                    <Link href={"/wishlist"}>
                                        Your Wishlist |
                                    </Link>
                                    <LogoutButton/>
                                </li>
                            </>
                        ) : (
                            <>
                                <Link href={"/login"} className="mr-2">LOGIN |</Link>
                                <Link href={"/register"}>REGISTER</Link>
                            </>
                        )}
        </div>
      </div>
      </>
    )
}