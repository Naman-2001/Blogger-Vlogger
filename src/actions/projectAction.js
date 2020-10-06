export const showPost = () => {
  return (dispatch) => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SHOW_POST", data });
      });
  };
};

export const showCategory = () => {
  return (dispatch) => {
    fetch("/categories")
      .then((res) => res.json())
      .then((catdata) => {
        dispatch({ type: "SHOW_CATEGORY", catdata });
      });
  };
};

export const showComments = () => {
  return (dispatch) => {
    fetch("/comments")
      .then((res) => res.json())
      .then((commentData) => {
        dispatch({ type: "SHOW_COMMENT", commentData });
      });
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    fetch("/new-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        console.log(res.json());
      })
      .then(() => dispatch({ type: "CREATE_COMMENT", comment }));
  };
};
