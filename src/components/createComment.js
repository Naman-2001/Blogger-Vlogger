import React, { useState } from "react";
import { createComment } from "../actions/projectAction";
import { useDispatch } from "react-redux";

function CreateComment() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    body: "",
    post: { id: "5f00d0ffcadf0947b05b218f" },
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [id]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(contact));

    setContact({
      name: "",
      email: "",
      body: "",
    });
  };

  return (
    <div>
      <form className="contact-form" id="comment-form">
        <h2 className="contact-form__title">Write a Comment</h2>
        <div className="row">
          <div className="col-md-6">
            <input
              className="contact-form__input-text"
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              onChange={handleChange}
              value={contact.name}
            />
          </div>
          <div className="col-md-6">
            <input
              className="contact-form__input-text"
              type="email"
              name="mail"
              id="email"
              placeholder="Email:"
              onChange={handleChange}
              value={contact.email}
            />
          </div>
        </div>
        <textarea
          className="contact-form__textarea"
          name="comment"
          id="body"
          placeholder="Comment"
          onChange={handleChange}
          value={contact.body}
        ></textarea>
        <input
          className="contact-form__submit"
          type="submit"
          name="submit-contact"
          id="submit_contact"
          value="Send Comment"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CreateComment;
