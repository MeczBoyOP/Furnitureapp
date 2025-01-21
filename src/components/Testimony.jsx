import React from 'react'

function Testimony() {
    return (
        <div className="we_do p-[10px] bg-#fff sm:px-[30px] md:px-[60px] lg:px-[90px] flex flex-col items-center">
            <div className="test_box w-[100%] gap-[20px] flex flex-col sm:flex-row sm:gap-[40px] md:gap-[60px] lg:gap-[80px] p-[20px] items-center bg-gradient-to-r from-[#e7cdcd] from-10% to-[#FAEEEE] to-100% ...">
                <div className="test_box_left w-[100%] h-[200px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
                    <img className='w-[100%] h-[100%] object-cover object-top' src="https://img.freepik.com/free-photo/debonair-woman-has-good-time_197531-13161.jpg?uid=R97735465&ga=GA1.1.1117345047.1692198205&semt=ais_incoming" alt="" />
                </div>
                <div className="test_box_right gap-[20px] lg:gap-[40px] flex flex-col item-center">
                    <div className="test_content flex flex-col gap-[20px] lg:gap-[30px]">
                        <h1 className='text-center sm:text-start lg:leading-[70px] text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-[#000]'>Redefining Living Spaces with Furniture home</h1>
                        <p className='text-center sm:text-start text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-slate-600'>They expertly turned my space into a haven of style and comfort. Every design element seemed to reflect my vision, creating an atmosphere that resonated with my dreams. The seamless blend of creativity and elegance has truly made my home an inspiring sanctuary.</p>
                    </div>
                    <div className='w-[100%] grid place-content-center'>
                        <button className='bg-slate-900 hover:bg-slate-600 text-[#ffffff] text-[12px] md:text-[14px] lg:text-[16px] px-[10px] py-[4px] md:px-[15px] md:py-[5px] lg:px-[20px] lg:py-[6px] rounded-[5px]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony