import React from 'react'

function Banner() {
    return (
        <div className="banner p-[10px] bg-#fff sm:px-[30px] md:px-[60px] lg:px-[90px]">
            <div className="banner_background flex flex-col items-center justify-center w-[100%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] gap-[6px] sm:gap-[10px] md:gap-[15px] lg:gap-[20px] bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?uid=R97735465&ga=GA1.1.1117345047.1692198205&semt=ais_incoming')]">
                <p className='text-[10px] sm:text-[12px] md:text-[14px] lg-[16px] text-[#d9d9d9]'>Furniture Home</p>
                <h1 className='text:[20px] sm:text-[24px] md:text-[32px] lg:text-[70px] text-[#ffffff]'>Embrace Peaceful Oasis</h1>
                <div className="search_box flex items-center">
                    <input className='border-[1px] w-[200px] md:w-[300px] lg:w-[400px] h-[25px] md:h-[30px] lg:h-[40px] p-[0px_10px] border-[#d9d9d9] bg-transparent text-[12px]' type="search" name="" placeholder='Search your Products here...' id="" />
                    <div className="search_image w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] grid place-content-center bg-[#000]">
                        <img className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px]' src="https://cdn-icons-png.flaticon.com/128/17216/17216943.png" alt="search_icon" />
                    </div>
                </div>
                <button className='bg-slate-900 hover:bg-slate-600 text-[#ffffff] text-[12px] md:text-[14px] lg:text-[16px] px-[6px] py-[3px] sm:px-[5px] sm:py-[4px] md:px-[10px] md:py-[5px] lg:px-[15px] lg:py-[6px] rounded-[5px]'>Shop Now</button>
            </div>
        </div>
    )
}

export default Banner