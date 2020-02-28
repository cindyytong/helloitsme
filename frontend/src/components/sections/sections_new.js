import React from "react";
import {withRouter} from "react-router-dom";

class SectionNew extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {
            text: "",
            // author: this.props.author.id,
            // story: this.props.story.id,
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // if not logged in show a modal 
        debugger
        if(!this.props.userId){
            alert("Sign in or create an account to contribute to this story")
        } else {
            e.preventDefault();
            let section = {
                text: this.state.text,
                author: this.props.userId,
                story: this.props.storyId
            };
            debugger
            this.props.composeSection(section);
        }
    }

    update(field){
        return e => {
            return this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    renderErrors(){
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => {
                    return (
                        <li key={`error-${i}`}>{this.state.errors[error]}</li>
                    )
                })}
            </ul>
        )
    }

    render(){
        return(
            <>
            <h3>Contribute to this Story</h3>
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.text}
                    onChange={this.update("text")} 
                    placeholder="Contribute at least one hundred characters to this story">
                </textarea>
                <br />
                <input type="submit" value="Add Section"></input>
                <br />
                {this.renderErrors()}
            </form>
            </>
        )
    }
}

export default SectionNew;