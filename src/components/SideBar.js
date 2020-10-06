import React from "react";

function SideBar(props) {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="widget social-widget">
          <ul className="social-list">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
                facebook
                <span>25k likes</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
                twitter
                <span>31k followers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
                instagram
                <span>31k followers</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="widget category-widget">
          <h2>Categories</h2>
          <ul className="category-list">
            {props.categories.map((category) => (
              <li>
                <a href="#">
                  {category.name} <span>24</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="widget subscribe-widget2">
          <h2>Join Our Newsletter</h2>
          <p>
            Sign up for our free newsletters to receive the latest news. Don't
            worry we won't do spam.
          </p>
          <form className="subscibe-form">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
            />
            <input type="submit" id="submit" value="Subscribe" />
          </form>
        </div>

        <div className="widget list-widget">
          <h2>Latest Stories</h2>
          <ul className="list-posts">
            <li>
              <a className="text-link" href="#">
                Lifestyle
              </a>
              <h2>
                <a href="single-post.html">Fusce pellentesque suscipit.</a>
              </h2>
              <ul className="post-tags">
                <li>2 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Food
              </a>
              <h2>
                <a href="single-post.html">
                  Integer vitae libero ac risus egestas placerat.
                </a>
              </h2>
              <ul className="post-tags">
                <li>2 days ago</li>
                <li>
                  <a href="#">3 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Lifestyle
              </a>
              <h2>
                <a href="single-post.html">
                  Vestibulum commodo felisquis tortor.
                </a>
              </h2>
              <ul className="post-tags">
                <li>4 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Travel
              </a>
              <h2>
                <a href="single-post.html">Quisque a lectus. </a>
              </h2>
              <ul className="post-tags">
                <li>4 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
