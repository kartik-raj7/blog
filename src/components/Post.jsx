import React from "react";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <img className="postimg" src="landscape.jpeg" alt="" />
      <div className="postinfo">
        <div className="postcategories">
          <span className="postcategory">Music</span>
          <span className="postcategory">Life</span>
          <span className="postcategory">Adventure</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor </span>
        <hr />
        <span className="postdate">5 hours ago</span>
      </div>
      <p className="postdesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo
        fugiat amet doloribus magnam ullam sequi optio maiores nulla, officiis
        quisquam itaque nam libero repellendus, dolore pariatur illo suscipit.
        Minima.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo
        fugiat amet doloribus magnam ullam sequi optio maiores nulla, officiis
        quisquam itaque nam libero repellendus, dolore pariatur illo suscipit.
        Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo
        fugiat amet doloribus magnam ullam sequi optio maiores nulla, officiis
        quisquam itaque nam libero repellendus, dolore pariatur illo suscipit.
        Minima.
      </p>
    </div>
  );
};

export default Post;
