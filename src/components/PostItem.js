import React from "react";

function PostItem({ post }) {
  return (
    <div className="news-post article-post2">
      <div className="row">
        <div className="col-md-6">
          <div className="image-holder">
            <img src="upload/blog/f1.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <a className="text-link" href="#">
            {post.category.name}
          </a>
          <h2>
            <a href="single-post.html">{post.title}.</a>
          </h2>
          <ul className="post-tags">
            <li>3 days ago</li>
            <li>
              <a href="#">3 comments</a>
            </li>
            <li>
              by <a href="#">Naman Aggarwal</a>
            </li>
          </ul>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
