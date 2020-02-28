import { connect } from "react-redux";
import { fetchStory } from '../../actions/story_actions';
import { composeSection } from "../../actions/section_actions";
import StoryShow from './story_show';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        storyId: ownProps.match.params.storyId,
        story: state.entities.stories.current,
        userId: state.session.user._id || null 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStory: (storyId) => dispatch(fetchStory(storyId)),
        composeSection: (section) => dispatch(composeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow);