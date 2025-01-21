import React from 'react'

function Footer() {
    return (
        <div className="footer p-[10px] bg-#fff sm:px-[30px] md:px-[60px] lg:px-[90px]">
            <div className="footer_box w-[100%] flex flex-col item-center justify-center gap-[20px] md:gap-[25px] lg:gap-[30px]">
                <div className='flex flex-col items-center gap-[10px] md:gap-[25px] lg:gap-[30px]'>
                    <h1 className='text-center sm:text-start lg:leading-[70px] text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-[#000]'>Subscribe to our Newsletter</h1>
                    <p className='text-center sm:text-start text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-slate-600'>Join our community to get weekly updates and unique gifts every friday</p>
                    <div className="search_box flex items-center">
                        <input className='rounded-[5px] border-[1px] w-[200px] md:w-[300px] lg:w-[400px] h-[25px] md:h-[30px] lg:h-[40px] p-[0px_10px] border-[#d9d9d9] bg-transparent text-[12px]' type="search" name="" placeholder='Enter your Email' id="" />
                        <div className="send_footer w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] grid place-content-center bg-[#000]">
                            <img className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px]' src="https://cdn-icons-png.flaticon.com/128/9068/9068837.png" alt="search_icon" />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] grid place-content-center'>
                    <button className='bg-slate-900 hover:bg-slate-600 text-[#ffffff] text-[12px] md:text-[14px] lg:text-[16px] px-[10px] py-[4px] md:px-[15px] md:py-[5px] lg:px-[20px] lg:py-[6px] rounded-[5px]'>Subscribe</button>
                </div>
            </div>

            <div className="divider w-[100%] h-[1px] bg-[#747474] m-[20px_0px]"></div>
            <div className="mb-[20px] social flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-[20px]">
                <p className='md:text-[16px] lg:text-[20px]'>&copy;2022 Company ,Inc. All rights reserved</p>
                <div className="social_list flex items-center">
                    <ul className='list-none flex items-center gap-[10px]'>
                        <li>
                            <a href="">
                                <img className='w-[20px] h-[20px] md:w-[25px] lg:w-[30px] md:h-[25px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img className='w-[20px] h-[20px] md:w-[25px] lg:w-[30px] md:h-[25px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img className='w-[20px] h-[20px] md:w-[25px] lg:w-[30px] md:h-[25px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer