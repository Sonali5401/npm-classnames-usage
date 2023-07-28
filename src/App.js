import "./styles.css";
import { useState, useEffect } from "react";
import classNames from "classnames";

export default function App() {
  const [btnData, setBtnData] = useState({
    counter: 100,
    isLiked: false,
    text: "Like"
  });

  var btnClass = classNames({
    "like-button": true,
    liked: btnData?.isLiked
  });

  useEffect(() => {
    console.log("btnData", btnData);
    console.log("btnClass", btnClass);
  }, [btnData, btnClass]);

  const handleClick = () => {
    if (btnData.isLiked) {
      const btncounter = btnData.counter - 1;
      setBtnData({ counter: btncounter, isLiked: false, text: "Like" });
    } else {
      const btncounter = btnData.counter + 1;
      setBtnData({ counter: btncounter, isLiked: true, text: "Liked" });
    }
  };
  return (
    <div className="App">
      <span className={btnClass}>
        <button
          onClick={handleClick}
        >{`${btnData?.text} | ${btnData?.counter}`}</button>
      </span>
    </div>
  );
}
