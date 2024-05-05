import React from 'react'
import { projectdata } from './data'
import live from '../../Images/live.png'
import github from '../../Images/github.png'

const Project = () => {
  return (
    <div className="bg-black h-[200vh]">
        <div className='font-bold ml-44 mt-16'>
            <h1 className="text-[44.8px] text-[#2E8B57]">
             Portfolio
            </h1>
            <h2 className='text-[#F5F5F5] text-[30.4px]'>
            Each project is a unique piece of development 🧩
            </h2>
        </div>
     <div className="ml-44 mt-5 text-white">
        {
            projectdata.map((item)=>{
                return (
                    <div className="border border-gray-50 shadow-2xl rounded-lg w-[85%] h-[40vh] bg-[#0D0D0D] flex gap-10">
                        <div className='flex w-[500px] h-[350px] overflow-y-hidden relative'>
                          <img className="h-[80%] w-[90%]" src={item.projectpicture} alt='project pic'></img>
                        </div>
                        <div>
                            <div>
                                <h1>{item.projectname}</h1>
                            </div>
                            <div>
                                <p>{item.projectdesc}</p>
                            </div>
                            <div>
                                <button>{item.projectlanguage1}</button>
                                <button>{item.projectlanguage2}</button>
                            </div>
                            <div>
                                <div>
                                    <button>Live demo</button>
                                    <img className='w-7 h-7' src={live} alt='live'></img>
                                </div>
                                <div>
                                    <button>Code</button>
                                    <img className='w-7 h-7' src={github} alt='github'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
     </div>
      
    </div>
  )
}

export default Project
