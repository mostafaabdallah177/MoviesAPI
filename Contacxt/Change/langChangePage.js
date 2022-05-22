import { useDispatch, useSelector } from "react-redux";
import LanguageAcion from "../../Store/Actions/Langaction";

export default function LangeChangePage() {
  const dispatch = useDispatch();
  let Language = useSelector((state) => state.Language.Language);

  const clicked = () => {
    dispatch(LanguageAcion(Language === "er" ? "en" : "ar"));
  };
  return (
    <div>
      Language IS : {Language}
      <br />
      <button onclick={() => clicked()}>Lang</button>
    </div>
  );
}
