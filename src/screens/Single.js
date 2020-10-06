import React, { useEffect } from "react";
import PostDesc from "../components/PostDesc";
import Comment from "../components/Comment";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { showComments } from "../actions/projectAction";

function Single() {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showComments());
  }, []);

  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment comments={comments} key={1} />
      </div>
      <Footer />
    </>
  );
}

export default Single;
