import Diff from "@/components/Diff";
import CardProduct from "@/components/CardProduct";
import Image from "next/image";
import Link from "next/link";
import { BsPersonFill } from 'react-icons/bs'
import ButtonAllproduct from "@/components/ButtonAllproduct";

export default function Home() {
  return (
    <>
    <div className="grid justify-center grid-cols-3 mx-40">
    <CardProduct/>
    </div>
    <ButtonAllproduct/>
      <Diff/>
    </>
  );
}
