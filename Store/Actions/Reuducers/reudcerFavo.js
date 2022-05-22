const INTI_STATE = {
  Favorit: [],
};
export default function FavReducer(state, action) {
  switch (action.type) {
    case "SET_FAVRO_PAGE":
      return {
        ...state,
        Favorit: [...state.Favorit, action.payload],
      };

    case "Delete_FAVRO_PAGE":
      return {
        ...state,
        Favorit: [...state.Favorit],
      };
    default:
      return INTI_STATE;
  }
}
