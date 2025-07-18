
function Hero() {
  return (
    <div className='w-full pb-10 sm:pb-20 lg:pt-20'>
        <div className='w:[95%] sm:w-[80%] lg:flex justify-between items-center mx-auto px-2 sm:px-0'>
            <div className='py-6 lg:w-[60%] lg:py-10'>
                
                <h1 className='text-6xl font-bold text-blue-950'>Build Your IT</h1>
                <p className="lg:pr-32 text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Error excepturi ex minima illum, amet aspernatur
                    aperiam quia, reiciendis nobis tempora delectus vero 
                    inventore ducimus, itaque ipsam id assumenda? Quidem, provident.
                </p>
                <div className='mt-4 lg:my-8'>
                    <button className='bg-blue-950 px-4 py-2 rounded-3xl 
                    text-white hover:bg-blue-900 transition-all mr-2' >
                        View Course
                    </button>
                    <button className='border border-blue-950 px-4 py-2 
                    rounded-3xl text-blue-950 hover:bg-blue-950 
                    hover:text-white transition-all'>
                        Promotion
                    </button>
                </div>

                {/* our school category */}
                <div className="mt-6 flex flex-wrap justify-between lg:justify-start gap-2">
                    <div className="w-[48%] lg:w-[20%] lg:mr-2 border-r border-gray-400 ">
                        <h1 className="text-3xl font-bold">3000+</h1>
                        <p className="lg:text-[14px] text-gray-500">Our Students</p>
                    </div>
                    <div className="w-[48%] lg:w-[20%] lg:mr-2 border-r border-gray-400 ">
                        <h1 className="text-3xl font-bold">20+</h1>
                        <p className="lg:text-[14px] text-gray-500">Our Course</p>
                    </div>
                    <div className="w-[48%] lg:w-[20%] lg:mr-2 border-r border-gray-400 ">
                        <h1 className="text-3xl font-bold">80%</h1>
                        <p className="lg:text-[14px] text-gray-500">Learner</p>
                    </div>
                    <div className="w-[48%] lg:w-[20%] lg:mr-2 border-r border-gray-400 ">
                        <h1 className="text-3xl font-bold">170k</h1>
                        <p className="lg:text-[14px] text-gray-500">Our Follower</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[220px] lg:w-[39%] lg:h-[450px] border-5 border-gray-500">
                <img src="./image/banner3.png" alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
