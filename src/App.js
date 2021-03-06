import "./App.css";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import { useState, useEffect } from "react";

function App() {
  const [editing, setEdit] = useState(false);
  const [postData, setCurrentData] = useState([]);
  const login = (e) => {
    e.preventDefault();
    const enteredPassword = document.getElementById("password").value;
    fetch("/api/pw").then((res) => {
      res.text().then((textRes) => {
        if (enteredPassword === textRes) {
          document.getElementById("modal").style.display = "none";
          document.getElementById("password").value = "";
          setEdit(true);
        }
      });
    });
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
      } else if (e.target.id === "edit-button") {
        document.getElementById("modal").style.display = "block";
      } else if (e.target.id === "stop-edit-button") {
        setEdit(false);
      }
    });
    fetch("/api").then((res) => {
      res.json().then((jsonRes) => {
        if (postData.length !== jsonRes.length) setCurrentData(jsonRes);
      });
    });
  });

  const deletePost = (e) => {
    const idToDelete = e.currentTarget.parentElement.id;
    if (idToDelete) {
      fetch("/api", {
        method: "DELETE",
        body: idToDelete,
        headers: {
          "Content-Type": "text/plain",
        },
      }).then(window.location.reload());
      // NEED A BETTER WAY THAN TO RELOAD THE PAGE
    }
  };
  return (
    <main>
      <div id="modal">
        <div id="modal-window">
          <h2>Authentication</h2>
          <form>
            <label htmlFor="password">
              Password
              <input name="password" id="password" type="password"></input>
            </label>
            <button onClick={login} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
      <header>
        <h1>Welcome to my coffee blog!</h1>
        <button
          className={`${editing === false ? "show" : "hide"}`}
          id="edit-button"
        >
          Edit
        </button>
        <button
          className={`${editing === false ? "hide" : "show"}`}
          id="stop-edit-button"
        >
          Stop Editing
        </button>
      </header>
      <NewPost editing={editing} />
      <section>
        {postData.map((x, i) => (
          <Post editing={editing} deletePost={deletePost} key={i} data={x} />
        ))}
      </section>
    </main>
  );
}

export default App;
