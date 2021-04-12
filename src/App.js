import "./App.css";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [editing, setEdit] = useState(false);
  const postData = [
    {
      Title: "Kahuna Coffee Blend",
      Image:
        "https://www.kroger.com/product/images/thumbnail/front/0081068302331",
      Paragraph:
        "With this seasonal flavored coffee there's no need to spend big bucks on a ticket to Hawaii, you can enjoy the taste of the tropics right from your kitchen. Put on a lei, find a beach chair, close you eyes and get swept away to coffee paradise with the blissful aroma of creamy white chocolate, perfectly toasted Hawaiian macadamia nuts and freshly ground coffee. Aloha",
    },
  ];
  const login = (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (password === "1") {
      document.getElementById("modal").style.display = "none";
      setEdit(true);
    }
  };
  document.addEventListener("mousedown", (e) => {
    if (e.target.id === "modal") {
      document.getElementById("modal").style.display = "none";
    } else if (e.target.id === "edit-button") {
      document.getElementById("modal").style.display = "block";
    } else if (e.target.id === "stop-edit-button") {
      setEdit(false);
    }
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
      <section>
        <Post data={postData[0]} />
        <Post data={postData[0]} />
      </section>
    </main>
  );
}

export default App;
