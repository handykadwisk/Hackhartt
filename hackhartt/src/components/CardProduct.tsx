export default function CardProduct(){
    return (
        <>
        <div className="card border border-black mr-4 mb-2">
        <figure className="pt-10 ">
          <img
            src="https://erigostore.co.id/cdn/shop/files/6afbc72719cce761ec852eb3e61bb163_720x.jpg?v=1684515011"
            alt="Shoes"
            className=" w-full transition-transform transform hover:scale-110"
          />
        </figure>
        <div className="card-body items-center text-center border border-black rounded-xl">
          <p className=" text-black text-md">
            Erigo Koko Short Sleeve Bordir Zachary White
          </p>
          <p className="text-lg text-orange-600 ">Rp. 60.000</p>
        </div>
      </div>
        </>
    )
}