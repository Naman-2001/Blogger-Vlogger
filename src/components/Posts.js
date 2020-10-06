import React, { useEffect } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { connect, useDispatch, useSelector } from "react-redux";
import { showPost } from "../actions/projectAction";
import { useState } from "react";

function Posts() {
  const posts = useSelector((state) => state.posts);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPost());
  }, []);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const postItem = currentPosts.map((post) => (
    <PostItem post={post} key={post._id} />
  ));

  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        {postItem}
        <Pagination
          postsPerPage={postsPerPage}
          totalposts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Posts;
