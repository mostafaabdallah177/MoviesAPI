import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdDeleteForever } from "react-icons/fa";

import axios from "axios";

export default function DetialsMovies() {
  const params = useParams();
  console.log("param", params);
  const [detials, setdetiel] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: "a286a5a59169167ecedff42bf504ece5",
        },
      })
      .then((res) => setdetiel(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="h11D">MovieDetils</h1>
      <div>
        <Card
          // MdCountertops
          className="cradmainD"
          style={{ width: "10rem", height: "18rem", float: "right" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${detials.poster_path}`}
          />
          <Card.Body style={{ fontSize: "10px" }}>{detials.title}</Card.Body>
          {/* <MdDeleteForever /> */}
        </Card>
      </div>
    </>
  );
}
