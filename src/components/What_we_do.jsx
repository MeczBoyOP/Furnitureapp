import React from 'react'

function What_we_do() {
    return (
        <div className="we_do p-[10px] bg-#fff sm:px-[30px] md:px-[60px] lg:px-[90px] flex flex-col items-center">
            <div className="we_do_box mb-[10px] md:mb-[20px] lg:mb-[30px] flex flex-col text-center gap-[20px] md:gap-[25px] lg:gap-[30px]">
                <h1 className='text-[30px] md:text-[40px] lg:text-[60px] text-[#000]'>What we do ?</h1>
                <p className='text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] text-[#00000069]'>Our Focus: Crafting Inspiring Living Spaces. At Furniture home, we're dedicated to turning ordinary spaces into visual masterpieces. With a passion for design, we collaborate closely with you to bring your unique vision to life. From color palettes to furniture arrangement, our decor experts ensure each corner tells a captivating story.</p>
                <p className='text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] text-[#00000069]'>Whether your style is contemporary, classic, or eclectic, let us expertly transform your dreams into stunning reality. Discover the art of creating lovely environments that truly resonate and inspire, as we skillfully turn houses into homes and rooms into reflections of you.</p>
            </div>
            <button className='bg-slate-900 hover:bg-slate-600 text-[#ffffff] text-[12px] md:text-[14px] lg:text-[16px] px-[10px] py-[4px] md:px-[15px] md:py-[5px] lg:px-[20px] lg:py-[6px] rounded-[5px]'>Learn More</button>
        </div>
    )
}

export default What_we_do