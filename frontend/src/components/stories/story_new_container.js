import { connect } from "react-redux";
import { composeStory } from '../../actions/story_actions';
import StoryNew from './story_new';

const mapStateToProps = (state) => {
    return {
        author: state.session.user 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        composeStory: (story) => dispatch(composeStory(story))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryNew);