import "./App.css";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import { useState, useEffect } from "react";

function App() {
  const [editing, setEdit] = useState(false);
  const [postData, setCurrentData] = useState([]);
  const login = (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (password === "1") {
      document.getElementById("modal").style.display = "none";
      document.getElementById("password").value = "";
      setEdit(true);
    }
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
    fetch("http://localhost:3001/api").then((res) => {
      res.json().then((jsonRes) => {
        if (postData.length !== jsonRes.postData.length)
          setCurrentData(jsonRes.postData);
      });
    });
  });
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
          <Post key={i} data={x} />
        ))}
      </section>
    </main>
  );
}

export default App;
