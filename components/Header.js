import Image from "next/image";
import React from "react";
import {session, signOut,useSession} from "next-auth/client"
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineFlag,
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineUserGroup, HiViewGrid } from "react-icons/hi";
import {BsFillChatDotsFill,BsFillBellFill} from "react-icons/Bs"
import {TbCircleChevronDown} from "react-icons/Tb"
import Headericon from "./Headericon";
function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex:item-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center space-x-2">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="fb-logo"
        
        />
        <div className="flex ml-2 items-center p-2 border rounded-full bg-grey-100">
          <AiOutlineSearch className="h-6 text-grey-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <Headericon active Icon={AiFillHome} />
            <Headericon Icon={AiOutlineFlag} />
            <Headericon Icon={AiOutlinePlayCircle} />
            <Headericon Icon={AiOutlineShoppingCart} />
            <Headericon Icon={HiOutlineUserGroup} />
          </div>
        </div>

        <div className="flex items-center sm:space-x-2 justify-end">
            <p className="whitespace-nowrap font-semibole pr-3">Hussain Ashraf</p>
            <HiViewGrid className="icon"/>
            <BsFillChatDotsFill className="icon"/>
            <BsFillBellFill className="icon"/>
            <TbCircleChevronDown className="icon"/>
        </div>

        <div className="flex items-center sm:space-x-2 justify-end">
          <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width = "40"
          height= "40"
          layout = "fixed"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
