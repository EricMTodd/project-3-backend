import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
  render() {
    const opts = {
      height: '25',
      width: '25',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="s7cHngfzF80"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Player;
