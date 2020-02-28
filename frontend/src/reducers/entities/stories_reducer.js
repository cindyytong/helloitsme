import { RECEIVE_STORIES, RECEIVE_STORY, RECEIVE_USER_STORIES } from '../../actions/story_actions';


const StoriesReducer = (
  state = { all: {}, user: {}, current: null },
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
    case RECEIVE_STORY:
      debugger
      newState.current = action.story.data;
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;