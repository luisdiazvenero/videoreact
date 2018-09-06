import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause.js';
import Timer from '../components/timer.js';
import VideoPlayerControls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js';
import Volume from '../components/volume.js';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    //console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    //event.target.value
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chill"
          />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
            />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
         <ProgressBar
           duration={this.state.duration}
           value={this.state.currentTime}
           handleProgressChange={this.handleProgressChange}
           />
         <Volume
           handleVolumeChange={this.handleVolumeChange}
          />
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
           />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
