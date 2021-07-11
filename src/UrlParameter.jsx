import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1> UrlParameter ページです。</h1>
      <p>Parameter is {`${id}`} (Javascript template string)</p>
      <p>Parameter is {id} (Javascript normal variable)</p>
    </div>
  );
};
