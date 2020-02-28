import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoryShow extends React.Component {
    componentDidMount(){
        this.props.fetchStory(this.props.storyId);
    }

    render(){
        let storyInfo;
        
        if(this.props.story) {

            let {story} = this.props;
            storyInfo =  (
            <>
            <h2>{story.title}</h2>
            <h3>Conceived by {story.creator.handle}</h3>
            <p>Created On: {story.created_at.split('T')[0]}</p>
            <img src={`http://localhost:5000${story.image}`} alt={story.title}></img>
            </>
        )} else {
            storyInfo = null;
        }

        return(
            <>
                <h3>Story Show</h3>
                {storyInfo}
            </>
        )
    }
};

export default StoryShow;