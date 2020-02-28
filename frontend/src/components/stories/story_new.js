import React from "react";
import { withRouter, Link } from "react-router-dom";

class StoryNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      intro: "",
      image: "",
      creator: this.props.author.id,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // create story then create first section
    e.preventDefault();
    let story = {
      title: this.state.title,
      intro: this.state.intro,
      image: 'another_one.jpg',
      creator: this.state.creator
    };
    this.props.composeStory(story);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h2>Create a New Story</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
          ></input>
          <br />
          <textarea
            value={this.state.intro}
            onChange={this.update("intro")}
            placeholder="And so your story begins..."
          ></textarea>
          <br />
        <input type="submit" value="Create Story" />
        {this.renderErrors()}
        </form>
        <br />
      </>
    );
  }
}

export default StoryNew;