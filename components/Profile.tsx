import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

type Props = {}

const links = {
  GITHUB:"https://www.github.com/adarshzpatel",
  TWITTER:"https://www.twitter.com/adarshzpatel",
  LINKEDIN:"https://www.linkedin.com/in/adarshpatelx/"
}

const Profile = (props: Props) => {
  return (
<div className='p-[1px] rounded-xl shadow-xl hover:shadow-2xl duration-300 ease-out hover:scale-105 bg-gradient-to-br from-neutral-500 via-neutral-800/50 to-neutral-600 fixed bottom-8 left-[50%] -translate-x-[50%]' >
    <div className="bg-neutral-800 rounded-xl flex  divide-x divide-neutral-600">
  <p className='text-neutral-400 p-2 px-4'>  built by <em className='text-violet-300'> Adarsh Patel </em></p>
  <a href={links.GITHUB} target='_blank' rel='noreferrer' className='p-2 hover:bg-neutral-700/50 text-neutral-400 hover:text-white duration-200'>
    <AiFillGithub  size={24}/>
  </a>
  <a href={links.LINKEDIN} target='_blank' rel='noreferrer' className='p-2 text-neutral-400 hover:bg-neutral-700/50 hover:text-blue-400 duration-200'>
    <AiFillLinkedin  size={24}/>
  </a>
  <a href={links.TWITTER} target='_blank' rel='noreferrer' className='p-2 text-neutral-400 hover:bg-neutral-700/50 hover:text-cyan-500 duration-200'>
    <AiFillTwitterCircle  size={24}/>
  </a>
    </div>
</div>
  )
}

export default Profile