import React from "react";
import Image from "next/image";
import { BsFillCameraVideoFill, BsFillCameraFill } from "react-icons/Bs";
import { BiHappyAlt } from "react-icons/Bi";
import { useSession } from "next-auth/client";
import { useRef,useState } from "react";
import {db,storage} from '../firebase'
import firebase from "firebase"
function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerref = useRef(null);
const [imagetopost, setimagetopost] = useState(null)
  const sendPost = (e) => {
    e.preventDefault();

    if(!inputRef.current.value) return


    db.collection('posts').add({
      mesaage:inputRef.current.value,
      name : session.user.name,
      email : session.user.email,
      image : session.user.image,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc =>{
      if(imagetopost){
        const uploadTask =storage.ref(`posts/${doc.id}`).putString(imagetopost,'data_url')
        removeImage();
        uploadTask.on(`state_change`,null,error=>console.error(error),()=>{
          storage.ref(`posts`).child(doc.id).getDownloadURL().then(url=>{
            db.collection(`posts`).doc(doc.id).set({
              postImage:url
            },{merge:true})
          })
        })
      }
    })
    inputRef.current.value ="";
  };
  const addImage = (e)=>{
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) =>{
        setimagetopost(readerEvent.target.result)
    }
   };
   const removeImage = ()=>{
     setimagetopost(null)
   }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6">
      <div className="flex spcae-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="user"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind,${session.user.name}`}
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imagetopost&&(
          <div onClick={removeImage} className="flex flex-col filter hover:bright-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img className="h-10 object-contain" src={imagetopost} alt="" srcset="" />
          </div>
          )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="InputIcon">
          <BsFillCameraVideoFill className="fill-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>

        </div>
        <div onClick={()=>filepickerref.current.click()} className="InputIcon">
          <BsFillCameraFill className="fill-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Post Pictue</p>
          <input  ref={filepickerref} onChange={addImage} type="file" hidden />
        </div>
        <div className="InputIcon">
          <BiHappyAlt className="fill-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Felling Happy</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
