
import Loading from "@/app/(withNavbar)/products/Loading";
import ClientFlashComponent from "@/components/ClientFlashComponent";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Register | HACKHARTT",
  description: "**",
}


export default function Home() {
  async function registerAction(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
      method: "post",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    // console.log(response,'<<<<<<');
    
    if (!response.ok) {
      const errorMessage = await response.json();
      redirect(`/register?error=${errorMessage.message}`);
    } else {
      redirect("/login");
    }
  }
  return (
    <>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <div className="absolute bg-gradient-to-b from-white-500 to-white-400 opacity-75 inset-0 z-0" />
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">

        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 shadow-lg shadow-black ">
            <div className="mb-4">
              <h3 className="font-bold text-3xl text-gray-800">CREATE ACCOUNT </h3>
              <div className="mt-5">
                <p>Already a member?<Link href={'/login'} className="text-black font-bold"> Login</Link ></p>
              </div>
            </div>
            <Suspense fallback={<Loading />}>
                        <ClientFlashComponent />
                    </Suspense>
            <form action={registerAction}>
            
            <div className="space-y-5">

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  EMAIL ADDRESS *
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-black  focus:outline-none focus:border-yellow-400"
                  type="email"
                  name="email"
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
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password *"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  Name *
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-black  focus:outline-none focus:border-yellow-400"
                  type="text"
                  name="name"
                  placeholder="Name *"
                />
              </div>

              <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Username *
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-black  focus:outline-none focus:border-yellow-400"
                type="text"
                name="username"
                placeholder="Username *"
              />
            </div>

              <div>
                <button
                  type="submit"
                  className="w-full mb-5 flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3 tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  SUBMIT
                </button>
                <Link href={"/"} className="font-bold hover:text-yellow-500">Back</Link>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}
