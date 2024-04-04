import Banner from "@/components/Banner";
import Banner1 from "@/components/Banner1";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Card/>
    {children}
    <Banner1/>
    <Footer/>
    </>
  );
}
