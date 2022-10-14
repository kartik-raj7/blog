import React from "react";
import "./SinglePost.css";
import "./Single.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrap">
        <img src="/landscape.jpeg" alt="image" className="singlepostimg" />
        <h1 className="singleposttitle">Lorem ipsum dolor</h1>
        <div className="singlepostedit">
        <div className="singleposticons">
          <EditIcon />
          </div>
          <div className="singleposticons">
          <DeleteIcon />
          </div>
          
        </div>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>KARTIK</b>&nbsp;
          </span>
          <span className="singlepostdate">5 hr ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          eveniet rerum repellat, dolores non temporibus earum. Debitis soluta
          aspernatur perferendis dolorem magni esse dolores fugit, ducimus
          exercitationem sit, hic ea.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          eveniet rerum repellat, dolores non temporibus earum. Debitis soluta
          aspernatur perferendis dolorem magni esse dolores fugit, ducimus
          exercitationem sit, hic ea.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          eveniet rerum repellat, dolores non temporibus earum. Debitis soluta
          aspernatur perferendis dolorem magni esse dolores fugit, ducimus
          exercitationem sit, hic ea.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          eveniet rerum repellat, dolores non temporibus earum. Debitis soluta
          aspernatur perferendis dolorem magni esse dolores fugit, ducimus
          exercitationem sit, hic ea.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          eveniet rerum repellat, dolores non temporibus earum. Debitis soluta
          aspernatur perferendis dolorem magni esse dolores fugit, ducimus
          exercitationem sit, hic ea.
        </p>
      </div>
    </div>
  );
}
