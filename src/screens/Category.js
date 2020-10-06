import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import Posts from "../components/Posts";
import Breadcrumb from "../components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { showCategory } from "../actions/projectAction";

function Category() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCategory());
  }, []);

  return (
    <>
      <Header />
      <Breadcrumb />
      <section class="blog-section">
        <div class="container">
          <div class="row">
            <Posts />
            <SideBar categories={categories} key={1} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
