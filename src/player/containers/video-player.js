import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';

class VideoPlayer extends Component {
  render(){
    return(
      <VideoPlayerLayout>
        <video
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
          autoPlay
          controls
          >
        </video>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
