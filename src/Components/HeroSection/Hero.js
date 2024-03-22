import React from 'react'
import './hero.css'
import welcome from '../../Images/hand.png'
import linkedin from '../../Images/linkedIn.png'
import github from '../../Images/github.png'
import upwork from '../../Images/upwork.png'
import { techstack } from './data'
import saadpic from '../../Images/saad.jpg'

const Hero = () => {
  return (
    <div className="bg-black text-white">
        <div className="mt-20 ml-44">
            <h1 className="text-[52px] font-mono filt">Front-End React</h1>
            <div className="flex">
            <h1 className="text-[52px] font-mono mt-2 filt">Developer</h1>
            <img className="h-12 w-15 mt-4 ml-3 animate" src={welcome} alt='Welcome'></img>
            </div>
        </div>

        <div className="ml-44 mt-6 text-[1.1rem]">
            <p>Hi, I'm Muhammad Saad. A passionate Front-end</p>
            <p>React Developer.</p>
        </div>

        <div className="flex ml-44 gap-[1rem] mt-10">
            <img className="h-9 w-9" src={linkedin} alt='social media'></img>
            <img className="h-9 w-9 bg-white rounded-[2rem]" src={github} alt='social media'></img>
            <img className="h-9 w-9" src={upwork} alt='social media'></img>
        </div>

        <div className="ml-48 mt-32 text-xl">
            <h1>Tech</h1>
            <h1 className="-ml-1">Stack</h1>
            <span className="borderlights"></span>
        </div>
        
        <div className="skills">
            {/* {
                techstack.map((skill) =>{
                    return (
                    <div className="container">
                    <img alt='skill' className="h-[14rem] tech object-contain rounded-[50%] border-[3px] border-black" src={skill.name} key={skill.id}></img>
                    </div>
                )})
            } */}
        </div>
        <div className='flex justify-end relative bottom-[105vh] right-[22vw] profile'>
            <img className='' src={saadpic} alt=''></img>
        </div>

        
      
    </div>
  )
}

export default Hero
