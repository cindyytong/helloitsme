import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoryNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                title: '',
                creator: '',
                sections: ''
        }
    }

    handleSubmit(e){
        // create story then create first section 
        e.preventDefault();
        let story = {
            title: this.state.title,
            creator: this.state.creator
        }
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
}