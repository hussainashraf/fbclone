import React from 'react'
import {BsFillCameraVideoFill} from "react-icons/Bs"
import{BiDotsHorizontal}from "react-icons/Bi"
import {FiSearch} from "react-icons/Fi"
import Contact from './Contact'
const contacts = [
    {src:"https://links.papareact.com/r57", name:"jeff"},
    {src:"https://links.papareact.com/r57", name:"jeff"},
    {src:"https://links.papareact.com/r57", name:"jeff"},
    {src:"https://links.papareact.com/r57", name:"jeff"},
    {src:"https://links.papareact.com/r57", name:"jeff"},
    

]
function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
            <BsFillCameraVideoFill className='h-6'/>
            <FiSearch className='h-6'/>
            <BiDotsHorizontal className='h-6'/>
            </div>
        </div>
        {contacts.map(contact=>(
            <Contact key={contact.src} src={contact.src} name={contact.name}/>
        ))}
    </div>
  )
}

export default Widgets