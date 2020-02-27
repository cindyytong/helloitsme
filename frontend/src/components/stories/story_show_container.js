import { connect } from "react-redux";
import { fetchStory } from '../../actions/story_actions';
import StoryShow from './story_show';

const mapStateToProps = (state, ownProps) => {
    return {
        storyId: ownProps.match.params.storyId,
        story: Object.values(state.entities.stories.current) || []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStory: (storyId) => dispatch(fetchStory(storyId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow);