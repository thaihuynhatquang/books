import "./App.css";
import HTMLFlipBook from "react-pageflip";

function App() {
  return (
    <div className="flip-book">
      <HTMLFlipBook width={600} height={800} showCover={true}>
        {[...Array(14).keys()].map((el) => {
          console.log(`./images/${el}.jpg`);
          return (
            <div key={el} className="page">
              <img width={600} src={`./images/${el}.jpg`} alt={el} />
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}

export default App;
