import React from 'react'

function VideoItem({video, onVideoSelect}) { 
    return (
      <div
        onClick={() => onVideoSelect(video)}
        className="ui unstackable items"
        key={video.id.videoId}
        style={{ cursor: "pointer" }}
      >
        <div className="item">
          <div className="image">
            <img
              alt={video.snippet.channelTitle}
              src={video.snippet.thumbnails.default.url}
            />
          </div>
          <div className="content">
            <div className="header">{video.snippet.title}</div>
            <div
              className="description"
              style={{'wordWrap': 'break-word','flex': 'inherit'}}
            >
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VideoItem
