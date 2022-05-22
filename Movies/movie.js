import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./movies.css";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import LanguageAcion from "./../Store/Actions/Langaction";
import FavroitAction from "./../Store/Actions/FavAction";
import { ToastContainer, toast } from "react-toastify";
import Axinstance from "../BaseUrl/baseurl";
import { getArtcails } from "./../Store/Art/articles";
import { LanguangeContext } from "../Contacxt/Language";
import LanguageReducer from "../Store/Actions/Reuducers/reducers";
export default function Movies() {
  const [movies, setMovie] = useState([]);
  let [number, setnumber] = useState([]);
  let [arr, Setarr] = useState([]);
  let notify = () => toast("Wow so easy!");

  const Fava = useSelector((state) => state.x.Favorit);
  // console.log("Fava", Fava);

  const { lang } = useContext(LanguangeContext);

  let [search, setsearch] = useState({
    name: "",
  });

  function ChangeSearch(e) {
    if (e.target.name === "name") {
      setsearch({
        ...search,
        name: e.target.value,
      });
    }
  }

  function SeachFun() {
    console.log("hi");
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          query: search.name,
          api_key: "a286a5a59169167ecedff42bf504ece5",
        },
      })
      .then((res) => {
        console.log(res);
        setMovie(res.data.results);
      });
  }

  function Next() {
    number = number + 1;
    // console.log(number);
    setnumber(number++);
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          page: number,
          api_key: "a286a5a59169167ecedff42bf504ece5",
        },
      })
      .then((res) => {
        // console.log("number", number);
        // console.log(res);
        setMovie(res.data.results);
      });
  }

  function Prev() {
    if (number === 1) {
      console.log("number 1");
    } else {
      number = number - 1;
      console.log(number);
      setnumber(number);
      axios
        .get(`https://api.themoviedb.org/3/movie/popular`, {
          params: {
            page: number--,
            api_key: "a286a5a59169167ecedff42bf504ece5",
          },
        })
        .then((res) => {
          setMovie(res.data.results);
        });
    }
  }
  useEffect(() => {
    // dispatch(getArtcails);

    Axinstance.get(`movie/popular`, {
      params: {
        api_key: "a286a5a59169167ecedff42bf504ece5",
        // page: number,
      },
    })
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  function FavroitData(movie) {
    dispatch(FavroitAction(movie));
    console.log("Fava", Fava);
  }
  // const dispatch = useDispatch();

  return (
    <>
      <span
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
          }}
          class="input-group"
        >
          <div className="form-outline">
            <input
              value={search.name}
              style={{
                width: "300px",
                height: "40px",
                marginButtom:"20px",
                marginRight:"-200px",
              }}
              type="search"
              id="form1"
              name="name"
              onChange={(e) => ChangeSearch(e)}
              class="form-control"
            />
          </div>{" "}
          <button
            onClick={() => SeachFun()}
            style={{
              width: "30px",
              marginTop: "-125px",
              marginLeft:"200px",
              height: "40px",
            }}
            type="button"
            className="btn btn-primary"
          >
            <FaSearch />
          </button>{" "}
        </div>{" "}
        {movies?.map((movie, index) => {
          return (
            <span
              style={{
                backgroundColor: "black",
                
              }}
            >
              <Card
                className="cradmain"
                style={{
                  width: "20rem",
                  height: "35rem",
                  float: "right",
                  margin:"30px",
                }}
              >
                <Link to={`/DetialsMovies/${movie.id}`} key={movie.id}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />{" "}
                </Link>{" "}
                <Card.Body
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  {movie.title} <br />
                  <button
                    onClick={() => FavroitData(movie, index)}
                    className="btnn"
                    style={{
                        padding:"4px",
                    }}
                  >
                    Favorites{" "}
                  </button>{" "}
                  <ToastContainer />
                  <Card></Card>
                </Card.Body>
              </Card>
            </span>
          );
        })}
      </span>

      <div id="divbtn">
        <Button className="btnn" onClick={() => Next()} variant="primary">
          next{" "}
        </Button>{" "}
        <Button className="btnn" onClick={() => Prev()} variant="primary">
          Prev{" "}
        </Button>{" "}
      </div>
    </>
  );
}
