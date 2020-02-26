import { connect } from "react-redux";
import { fetchStories } from "../../actions/story_actions";
import MainPage from "./main_page";


const mapStateToProps = state => {
  return {
    stories: Object.values(state.entities.stories.all) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: () => dispatch(fetchStories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
