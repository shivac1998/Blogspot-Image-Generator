import "./App.css";
import RandomPictureGenerator from "./Components/RandomPicture";
import Header from "./Components/ui/ui/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPictureGenerator />
    </div>
  );
}
export default App;
