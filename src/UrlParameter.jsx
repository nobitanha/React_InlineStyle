import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1> UrlParameter ページです。</h1>
      <p>Parameter is {`${id}`} (Javascript template string)</p>
      <p>Parameter is {id} (Javascript normal variable)</p>
      <p>Query parameter is {query.get("name")} </p>
    </div>
  );
};
