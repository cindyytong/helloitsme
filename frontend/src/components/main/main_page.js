import React from 'react';
import { withRouter } from "react-router-dom";

class MainPage extends React.Component {
    componentDidMount(){
       this.props.fetchStories();
    }

  render() {

    let titles = (this.props.stories.length === 0) ? (<div>There are no stories</div>) : (this.props.stories.map(story => {
      return <li>{story.title}</li>;
    }))

    return (
      <>
        <div>
          <h1>Hello It's Me</h1>
          <h3>Collective digital storytelling</h3>
          <p>Developed by Cindy Tong</p>
          <p>Made in NYC 2020</p>
        </div>

        <div>
          <h3>Table of Contents</h3>
          <ul>{titles}</ul>
        </div>
      </>
    );
  }
}

export default withRouter(MainPage);