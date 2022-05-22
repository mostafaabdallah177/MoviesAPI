import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Favroit.css";

import { Link } from "react-router-dom";
import FavroitAction from "../Store/Actions/FavAction";
import DeleteAction from "../Store/Actions/actiondelete";
export default function Favorites() {
  const Fava = useSelector((state) => state.x.Favorit);

  let [arr, Setarr] = useState([]);
  const dispatch = useDispatch();

  function DeleteMovie(movie) {
    console.log("movie", Fava);
    // arr.slice((x) => x === movie);
    Fava.pop(movie);
    dispatch(DeleteAction(Fava));
  }

  return (
    <>
      <span style={{ backgroundColor: "black" }}>
        {Fava?.map((movie, index) => {
          return (
            <span style={{ backgroundColor: "black" }}>
              <Card
                className="cradmain"
                style={{ width: "10rem", height: "19rem", float: "right" }}
              >
                <Link to={`/DetialsMovies/${movie.id}`} key={movie.id}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </Link>
                <Card.Body style={{ fontSize: "10px" }}>
                  {movie.title}
                  <br />
                  <button className="btnnn" onClick={() => DeleteMovie(movie)}>
                    Detete
                  </button>
                </Card.Body>
              </Card>
            </span>
          );
        })}
      </span>
    </>
  );
}
