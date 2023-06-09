import Image from "next/image";
import React from "react";
import {FaRegThumbsUp} from "react-icons/Fa"
import {BiComment,BiShareAlt} from "react-icons/Bi"
function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="profile-pic "
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp?(
                <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ):(
                 <p className="text-xs text-gray-400">Loading</p>
            )}
            
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFIt="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center  rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="InputIcon rounded-none" ><FaRegThumbsUp className="h-4"/>
          <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="InputIcon rounded-none"><BiComment className="h-4"/>
          <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="InputIcon rounded-none"><BiShareAlt className="h-4"/>
          <p className="text-xs sm:text-base">Share</p>
          </div>
      </div>
    </div>
  );
}

export default Post;
