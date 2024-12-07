import { useCallback, useRef, useState } from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import { BackgroundMusic } from "./BackgroundMusic.js";

function App() {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  return (
    <div className="flip-book">
      {currentPage > 0 && (
        <img
          className="left-arrow"
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          width={48}
          height={96}
          src="./images/left_arrow.png"
          alt="prev"
        />
      )}

      <HTMLFlipBook width={600} height={800} ref={bookRef} onFlip={onFlip}>
        <div className="page">
          <img width={600} src="./images/pages/first.png" alt="first" />
        </div>
        {[...Array(36).keys()].map((el) => {
          return (
            <div key={el} className="page">
              <img width={600} src={`./images/pages/${el}.jpg`} alt={el} />
            </div>
          );
        })}
        <div className="page">
          <img width={600} src="./images/pages/last.png" alt="last" />
        </div>
      </HTMLFlipBook>

      {currentPage < 36 && (
        <img
          className="right-arrow"
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          width={48}
          height={96}
          src="./images/right_arrow.png"
          alt="next"
        />
      )}

      <BackgroundMusic />
    </div>
  );
}

export default App;
