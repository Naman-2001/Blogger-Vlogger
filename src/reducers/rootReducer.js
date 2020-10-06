const initState = {
  posts: [],
  categories: [],
  comments: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_POST":
      return {
        ...state,
        posts: action.data.posts,
      };
    case "SHOW_CATEGORY":
      return {
        ...state,
        categories: action.catdata.categories,
      };
    case "SHOW_COMMENT":
      return {
        ...state,
        comments: action.commentData.comments,
      };
    case "CREATE_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    default:
      return state;
  }
};

export default postReducer;
