import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
// import './App.css';
export class App extends Component {
    state = {videos:[], selectedVideo:null}
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }
    render() {
        return (
          <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui stackable grid video-section">
              <div className="eight wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="eight wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default App
