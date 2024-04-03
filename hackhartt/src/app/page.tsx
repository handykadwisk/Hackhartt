import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="navbar bg-white">
        <a className="btn btn-ghost text-l">CARHARTT REWORKED |</a>
        <a className="btn btn-ghost text-l">
CARHARTT FOR BUSINESS</a>
      </div>

      {/* <div className="w-full h-40 mt-3 rounded-xxl= items-center p-10">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjUTR8TTKXFqYOvx_hLMrGbSdUAF8-tzF6qvVafHJww&s" className="w-full" />
      </div> */}
      <div className="h-10 bg-black text-yellow-600 text- p-2 item text-center">
        <a href="">OUTWORK EVERY DAY OF SPRING SHOP NOW</a>
      </div>

      <div className="mr-2 ml-2 p-10 ">
        <img src="https://res.cloudinary.com/hartville-hardware/image/upload/c_scale,f_auto,h_450,q_auto,w_600/v1681845806/marketing/Carhartt_Header_Mobile_2.png"
          className="h-96 w-full rounded-3x" />
      </div>


      {/* <div className="carousel w-full mt-3 rounded-xl items-center">
        <div className="carousel w-full rounded-xl items-center mr-10 ml-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          </div>
        </div>
      </div> */}


      
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
      </div>
      {/* <div className="carousel carousel-end rounded-box mt-5 h-40 items-center mr-10 ml-10 relative">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
        </div>
      </div> */}

      <div className="mr-10 ml-10 p-10">
        <img src="https://res.cloudinary.com/hartville-hardware/image/upload/c_scale,f_auto,h_450,q_auto,w_600/v1681845806/marketing/Carhartt_Header_Mobile_2.png"
          className="h-96 w-full rounded-3xl" />
      </div>
    </>
  );
}
