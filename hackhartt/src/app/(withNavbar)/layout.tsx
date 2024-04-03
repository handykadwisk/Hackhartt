import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    <Banner/>
    <Footer/>
    </>
  );
}
