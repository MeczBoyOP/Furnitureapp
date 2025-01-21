import React from 'react'

function Header() {
    return (
        <header>
            <div className="header p-[10px] bg-#fff sm:px-[30px] md:px-[60px] lg:px-[90px]">
                <div className="header_option flex items-center justify-between w-[100%]">
                    <div className="logo flex gap-[6px] sm:gap-[6px] md:gap-[6px] lg:gap-[6px]">
                        <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src="https://cdn-icons-png.flaticon.com/128/17774/17774521.png" alt="logo_icon" />
                        <h1 className='text-[16px] md:text-[20px] text-[#000] font-bold'>Future Furniture</h1>
                    </div>
                    <div className="header_menu">
                        <ul className='hidden sm:flex sm:items-center sm:gap-[10px] md:gap-[20px]'>
                            <li><a className='text-[12px] md:text-[14px] lg:text-[16px] text-[#000] hover:text-slate-700 hover:font-medium' href="">Home</a></li>
                            <li><a className='text-[12px] md:text-[14px] lg:text-[16px] text-[#000] hover:text-slate-700 hover:font-medium' href="">Collection</a></li>
                            <li><a className='text-[12px] md:text-[14px] lg:text-[16px] text-[#000] hover:text-slate-700 hover:font-medium' href="">Cart</a></li>
                            <li><a className='text-[12px] md:text-[14px] lg:text-[16px] text-[#000] hover:text-slate-700 hover:font-medium' href="">Contact</a></li>
                        </ul>
                        <img className='w-[30px] h-[30px] sm:hidden' src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png" alt="Header Menu Icon" />
                    </div>
                    <div className="user_profile w-[30px] h-[30px] rounded-full md:w-[40px] md:h-[40px]">
                        <img src="https://cdn-icons-png.flaticon.com/128/18663/18663663.png" alt="profile_image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header