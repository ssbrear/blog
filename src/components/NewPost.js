import React from "react";

function NewPost({ data, editing }) {
  const postNew = (e) => {
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG";
    const title = document.getElementById("title-input").value;
    const paragraph = document.getElementById("paragraph-input").value;
    fetch("http://localhost:3001/api", {
      method: "POST",
      body: JSON.stringify({ title, image, paragraph }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => console.log("Success: ", data)));
  };
  return (
    <article className={`${editing === true ? "show" : "hide"}`}>
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
        <button onClick={postNew} id="post-button" type="submit">
          Post
        </button>
      </form>
    </article>
  );
}

export default NewPost;
