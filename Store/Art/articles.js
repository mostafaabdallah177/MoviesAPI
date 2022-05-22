import axios from "axios";
import Axinstance from "../../BaseUrl/baseurl";

export const getArtcails = () => (dispatch) => {
  //nameless functions
  // Return promise with success and failure
  return Axinstance.get(`movie/popular`, {
    params: {
      api_key: "a286a5a59169167ecedff42bf504ece5",
    },
  }).then(
    (res) => dispatch({ type: "GET_ARTCALES", payload: res.data.artical }),
    (err) => console.log("err")
  );
};
