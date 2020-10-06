import React from "react";
import moment from "moment";
import CreateComment from "./createComment";

function Comment(props) {
  return (
    <>
      <div className="comments">
        <h2 className="comments-title">{props.comments.length} Comments</h2>
        <ul className="comments__list">
          {props.comments.map((comment) => (
            <>
              <li className="comments__list-item">
                <img
                  className="comments__list-item-image"
                  src="upload/single/th1.jpg"
                  alt=""
                />
                <div className="comments__list-item-content">
                  <h3 className="comments__list-item-title">{comment.name}</h3>
                  <span className="comments__list-item-date">
                    {moment(comment.createdAt).fromNow()}
                  </span>
                  <a className="comments__list-item-reply" href="#">
                    <i className="la la-mail-forward"></i>
                    Reply
                  </a>
                  <p className="comments__list-item-description">
                    {comment.body}
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
      <CreateComment />
    </>
  );
}

export default Comment;
