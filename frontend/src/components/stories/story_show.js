import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoryShow extends React.Component {
    componentDidMount(){
        debugger
        this.props.fetchStory(this.props.storyId);
    }

    render(){
        const { story } = this.props;
        return(
            <>
                <h3>Story Show</h3>
                Title: {story.title}
                Creator: {story.creator.handle}
                Created At: {story.created_at}
                <img src={story.image}></img>
            </>
        )
    }
};

export default StoryShow;