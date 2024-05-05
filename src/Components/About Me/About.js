import React from 'react'

const About = () => {
  return (
    <>
    <div>
      {/* <img src={aboutme} alt='about me'></img> */}
    </div>
    <div className="bg-[#0D0D0D] h-[76vh] flex flex-col overflow-x-hidden pt-6">
        <div>
            <div className="flex gap-4 flex-col relative left-[58%] mt-10">
                <h1 className='text-[#2E8B57] text-[48px] font-bold'>About Me</h1>
                <div className="text-[#E5E5E5] font-bold text-[30.4px]">
                <h1>A dedicated Front-end Developer</h1>
                <h1>based in Islamabad, Pakistan.</h1>
                </div>
              <div className='text-[#EEEEEE] text-[16px]'>
                <p>As a Junior Front-End Developer, I possess an impressive arsenal</p>
                <p className='mt-[6px]'>of skills in HTML5 , CSS3, JavaScript, ReactJS along with Tailwind.</p>
                <p className='mt-[6px]'>I excel in designing and maintaining responsive websites that of-</p>
                <p className='mt-[6px]'>fer a smooth user experience. My expertise lies in craftingdynamic</p>
                <p className='mt-[6px]'>, engaging interfaces through writing clean and optimized code</p>
                <p className='mt-[6px]'> and utilizing cutting-edge development tools and techniques.</p>
                <p className='mt-[6px]'> I am also a team player who thrives in collaborating with</p>
                <p className='mt-[6px]'>l teams to produce outstanding web applications.</p>
              </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default About
