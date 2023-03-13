import { useSession } from "next-auth/client";
import React from "react";
import { FaUserFriends } from "react-icons/Fa";
import { MdOutlineGroups } from "react-icons/Md";
import { BsBagDash } from "react-icons/Bs";
import { MdMonitor } from "react-icons/Md";
import {
  AiOutlineCalendar,
  AiFillClockCircle,
  AiOutlineArrowDown,
} from "react-icons/ai";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={FaUserFriends} title="Friends" />
      <SidebarRow Icon={MdOutlineGroups} title="Groups" />
      <SidebarRow Icon={BsBagDash} title="Market" />
      <SidebarRow Icon={MdMonitor} title="Time" />
      <SidebarRow Icon={AiOutlineCalendar} title="Market" />
      <SidebarRow Icon={AiFillClockCircle} title="Market" />
      <SidebarRow Icon={AiOutlineArrowDown} title="Market" />
    </div>
  );
}

export default Sidebar;
