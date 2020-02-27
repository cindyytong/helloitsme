import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoryShow extends React.Component {
    componentDidMount(){
        this.props.fetchStory(this.props.storyId);
    }

    render(){
        const { story } = this.props;
        return(
            <>
                <h3>Story Show</h3>
                {story}
            </>
        )
    }
};

export default StoryShow;