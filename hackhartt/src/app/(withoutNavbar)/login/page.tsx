'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in yo your account</h2>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="" className="space-y-6">
            <div>
              <label htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
                Email Addres
              </label>
            </div>
          </form>

        </div>

      </div> */}
      <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
  
    <div className="absolute bg-gradient-to-b from-white-500 to-white-400 opacity-75 inset-0 z-0" />
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 shadow-lg shadow-black ">
          <div className="mb-4">
            <h3 className="font-bold text-3xl text-gray-800">LOGIN </h3>
            <div className="mt-5">
            <Link href={'/register'}  className="text-black font-bold">Not a member yet? Create account</Link >
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                EMAIL ADDRESS *
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-black  focus:outline-none focus:border-yellow-400"
                type=""
                placeholder="mail@gmail.com *"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-bold text-gray-700 tracking-wide">
                PASSWORD *
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-black focus:outline-none focus:border-yellow-400"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password *"
              />
            </div>
            <div className="text-sm">
                <a href="#" className="text-black hover:text-yellow-500">
                  Forgot your password?
                </a>
              </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
            </div>
              
            <div>
              <button
                type="submit"
                className="w-full mb-5 flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3 tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
              <Link href={"/"} className="font-bold hover:text-yellow-500">Back</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    

    </>

  );
}
