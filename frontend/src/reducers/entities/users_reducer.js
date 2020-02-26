
const UsersReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    switch (action.type) {
      default:
        return initialState;
    }
};

export default UsersReducer;
