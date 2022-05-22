export default function artcialReducers(state = [], action) {
  switch (action.type) {
    case "GET_ARTCALES":
      return action.payload;
    default:
      return state;
  }
}
