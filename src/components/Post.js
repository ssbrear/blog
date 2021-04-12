import React from "react";

function Post({ data }) {
  return (
    <article>
      <img alt="Coffee Pod" src={data.Image}></img>
      <h2>{data.Title}</h2>
      <p>{data.Paragraph}</p>
    </article>
  );
}

export default Post;
