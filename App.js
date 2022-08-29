import "./App.css";
import RandomPictureGenerator from "./Components/RandomPicture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Blogspot</h1>
      </header>
      <div>
        <h3>A random image generator</h3>
      </div>
      <div>
        <section>
          <RandomPictureGenerator />;
        </section>
      </div>
    </div>
  );
}

export default App;
