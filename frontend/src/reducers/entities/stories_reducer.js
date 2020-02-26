import { RECEIVE_STORIES, RECEIVE_NEW_STORY, RECEIVE_USER_STORIES } from '../../actions/story_actions';


const StoriesReducer = (
  state = { all: {}, user: {}, new: {} },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STORIES:
        action.stories.data.forEach(story => {
            newState.all[story._id] = story
        });
    //   newState.all = action.stories.data;
      return newState;
    case RECEIVE_USER_STORIES:
      newState.user = action.stories.data;
      return newState;
    case RECEIVE_NEW_STORY:
      newState.new = action.story.data;
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;