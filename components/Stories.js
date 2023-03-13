import React from 'react'
import StoryCard from './StoryCard'
const stories =[
    {
        name:"Elon",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/snf"

    },
    {
        name:"Elon",
        src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
        profile: "https://links.papareact.com/snf"
    },
    {
        name:"Elon",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/snf"
    },
    {
        name:"Elon",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/snf"
    },
    
];
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map((story)=>(
            <StoryCard name={story.name} src={story.src} profile={story.profile}/>
        ))}
    </div>
  );
}

export default Stories