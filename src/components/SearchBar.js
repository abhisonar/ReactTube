import React, { Component } from "react";
import youtube_img from '../images/youtube.png'
import './App.css'
export class SearchBar extends Component {
    state = { term: '' };
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
  render() {
    return (
      <div className="top ui grid">
        <div className="logo ui grid four wide column">
            <div className="sixteen wide column logo-img">
                <img src={youtube_img} alt="youtube"/>
            </div>
        </div>
        <div className="search-bar ui segment twelve wide column">
          <form onSubmit={this.onFormSubmit} action="" className="ui form">
            <div className="field">
              <label htmlFor="">Video Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
