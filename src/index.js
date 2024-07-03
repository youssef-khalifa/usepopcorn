import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './Appv2';
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating  size={'24'} color="red" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
