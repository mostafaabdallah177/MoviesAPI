import axios from "axios";
const Axinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: { "X-Custom-Header": "foobar" },
});
export default Axinstance;
