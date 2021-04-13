import React from "react";

function Post({ data, index, deletePost, editing }) {
  return (
    <article id={data.id} className="post">
      <img alt="Coffee Pod" src={data.image}></img>
      <h2>{data.title}</h2>
      <p>{data.paragraph}</p>
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
