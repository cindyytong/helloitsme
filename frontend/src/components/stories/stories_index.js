import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoriesIndex extends React.Component {
    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        let storiesList =
          this.props.stories.length === 0 ? (
            <div>There are no stories</div>
          ) : (
            this.props.stories.map(story => {
              return (
                <li key={story.title}>
                  <Link to={`stories/${story._id}`}>{story.title}</Link>, conceived by{" "}
                  {story.creator.handle}
                </li>
              );
            })
          );
        return (
            <>
                <h3>Stories Index</h3>
                {storiesList}
            </>
        )
    }

};

export default StoriesIndex; 