import React from "react";

function Post({ data, index, deletePost, editing }) {
  return (
    <article id={index} className="post">
      <img alt="Coffee Pod" src={data.Image}></img>
      <h2>{data.Title}</h2>
      <p>{data.Paragraph}</p>
      <button
        className={`${editing === true ? "show" : "hide"} x-button`}
        type="submit"
        onClick={deletePost}
      >
        <span className="x x-l"></span>
        <span className="x x-r"></span>
      </button>
    </article>
  );
}

export default Post;
