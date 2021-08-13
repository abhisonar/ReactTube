import React from 'react'
import VideoItem from './VideoItem'

function VideoList({ videos, onVideoSelect }) {
   const rederedList =  videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>
    });
    return (
        <div>
            {rederedList}
        </div>
    )
}

export default VideoList
