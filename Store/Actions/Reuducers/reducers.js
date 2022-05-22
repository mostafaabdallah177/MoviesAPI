let INTI_STATE = {
  Language: "en",
};
export default function LanguageReducer(state = INTI_STATE, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        Language: action.payload,
      };
    default:
      return INTI_STATE;
  }
}
