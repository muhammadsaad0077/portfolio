import React, { useEffect, useState } from 'react'
import bars from '../../Images/bars.png'
import close from '../../Images/close.png'
import { resume } from '../../utils/constants'
import gitfork from '../../Images/gitfork.svg'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [active, setActive] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    }
    const resumeDownload = ()=>{
        window.open(resume, "_blank")
    }
    const isActive = ()=>{
      window.scrollY > 0 ? setActive(true): setActive(false)
    }

    useEffect(()=>{
      window.addEventListener('scroll', isActive)

      return()=>{
        window.removeEventListener('scroll', isActive)
      }
    },[])
  return (
    <nav className='bg-black'>
    <div className={active ? "text-white flex justify-between p-2 sticky top-0 w-[100%] transition-all ease 0.7s z-[999] shadow-[#64646f33] border-b border-white": "text-white flex justify-between p-2 sticky top-0 w-[100%] transition-all ease 0.7s z-[999]"}>
      <div className="m-6">
        <h1>Saad</h1>
      </div>
      <div className="m-6 border border-gray-100 rounded-2xl p-[6px] px-4 hover:bg-gray-600 cursor-pointer">
        <a href='#a' className="font-bold">Available for projects</a>
      </div>
      <div className="m-6 flex border border-gray-100 rounded-2xl py-1 px-4">
        <h1 className="cursor-pointer" onClick={resumeDownload}>Resume</h1>  
        <div className="mx-4 relative left-2 cursor-pointer" onClick={handleClick}>
          {!click ?(
            <img className="w-5 h-5 bg-white my-1" src={bars} alt='menu'></img>
          ): (
            <img className="w-5 h-5 bg-white my-1" src={close} alt='close'></img>
          )
          }
          </div>  
        
       
        </div>
        </div>
          {
            click && (
              <div className="absolute border text-white border-gray-50 left-[85%] p-8 top-32">
                <div className="">
                  <ul className="flex flex-col justify-center text-center">
                <a href="github_profile" target='_blank'>
                <div className="flex items-center justify-center border border-gray-50 rounded-[2rem] py-1 mb-2">
                  <img className="w-[2.5rem] h-[2.5rem]" src={gitfork} alt='Fork'></img>
                <h1 className="text-xl font-bold">Fork</h1>
                </div>
                </a>
                
                  <li className="m-1 p-1 border border-gray-50 px-8 hover:bg-[#2e8b57] ease 0.7s hover:text-white transition-all">Home</li>
                  <li className="m-1 p-1 border border-gray-50 px-8 hover:bg-[#2e8b57] ease 0.7s hover:text-white transition-all">About</li>
                  <li className="m-1 p-1 border border-gray-50 px-8 hover:bg-[#2e8b57] ease 0.7s hover:text-white transition-all">Projects</li>
                  <li className="m-1 p-1 border border-gray-50 px-8 hover:bg-[#2e8b57] ease 0.7s hover:text-white transition-all">Certificates</li>
                  <li className="m-1 p-1 border border-gray-50 px-8 hover:bg-[#2e8b57] ease 0.7s hover:text-white transition-all">Contact</li>
                </ul>
                </div>
              </div>
            )
          }
          
    </nav>
  )
}

export default Navbar
