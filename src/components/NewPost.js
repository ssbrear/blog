import React from "react";

function NewPost({ data }) {
  return (
    <article>
      <form id="new-post-form">
        <label id="image-label" htmlFor="image-input">
          Upload an image
          <input id="image-input" type="file" />
        </label>
        <label id="title-label" htmlFor="title-input">
          Name your post:
          <input id="title-input" type="text" />
        </label>
        <label id="paragraph-label" htmlFor="paragraph-input">
          What would you like to post?
        <textarea id="paragraph-input" />
        </label>
        <button id="post-button" type="submit">
          Post
        </button>
      </form>
    </article>
  );
}

export default NewPost;
