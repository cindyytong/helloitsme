import React from "react";
import {withRouter} from "react-router-dom";

class SectionNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            // author: this.props.author.id,
            // story: this.props.story.id,
            // errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // if not logged in show a modal 
   
            e.preventDefault();
            let section = {
                text: this.state.text || "",
                author: this.props.author || null,
                story: this.props.story
            };

            // this.props.composeSection(section);

            if (!this.props.author) {
              alert("Sign in or create an account to contribute to this story");
            } else {
              this.props.composeSection(section).then((section) => {
                  debugger
                  this.props.history.push(this.props.story.id)
              });
            }
    }

    update(field){
        return e => {
            return this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    // renderErrors(){
    //  
    //     return (
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => {
    //                 return (
    //                     <li key={`error-${i}`}>{this.state.errors[error]}</li>
    //                 )
    //             })}
    //         </ul>
    //     )
    // }

    render(){
        let errorsList;
        if(this.props.errors.length > 0){
            errorsList = this.props.errors.map(error => {
                return (
                    <li>{error}</li>
                )
            }) 
        }

        return (
          <>
            <h3>Contribute to this Story</h3>
            <form onSubmit={this.handleSubmit}>
              <textarea
                value={this.state.text}
                onChange={this.update("text")}
                placeholder="Contribute at least one hundred characters to this story"
              ></textarea>
              <br />
              <input type="submit" value="Add Section"></input>
              <br />
              <ul>{errorsList}</ul>
            </form>
          </>
        );
    }
}

export default withRouter(SectionNew);