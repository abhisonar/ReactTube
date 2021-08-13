import React from 'react'

function VideoDetail({ video }) {
    if (!video) {
      return <div>Loading....</div>;
    }
    let videoLink = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <iframe
          width="100%"
          height="400"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="ui segment">
            <div className="ui header">{video.snippet.title}</div>
            <p>{video.snippet.description}</p>
        </div>
      </div>
    );
}

export default VideoDetail
