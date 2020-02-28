import React from "react";
import { withRouter, Link } from "react-router-dom";

import SectionItem from './section_item';

class StoryShow extends React.Component {
    componentDidMount(){
        this.props.fetchStory(this.props.storyId);
    }

    render(){
        let storyInfo;
        if(this.props.story) {
            let {story} = this.props;
            storyInfo = (
              <>
                <h2>{story.title}</h2>
                <h3>Conceived by {story.creator.handle}</h3>
                <p>Created On: {story.created_at.split("T")[0]}</p>
                <img
                  src={`./story_images/${story.image}`}
                ></img>
              </>
            );} else {
            storyInfo = null;
        }

        let storySections;
        if(this.props.story){
            debugger
            storySections = "sections here"
            let {story} = this.props;
            storySections = story.sections.map(section => {
                debugger
                return <SectionItem key={section.id} section={section} />
            })
        } else {
            storySections = null;
        }

        return(
            <>
                <h3>Story Show</h3>
                {storyInfo}
                {storySections}
            </>
        )
    }
};

export default StoryShow;