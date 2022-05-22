import { combineReducers } from "redux";
import FavReducer from "../Reuducers/reudcerFavo";
import LanguageReducer from "./../Reuducers/reducers";
import artcialReducers from "./../Reuducers/ArtReudesers";
export default combineReducers({
  Language: LanguageReducer,
  x: FavReducer,
  artical: artcialReducers,
});
