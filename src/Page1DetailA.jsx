import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation;
  console.log(location);
  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1> Page1 Detail A ページです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
