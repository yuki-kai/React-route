import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/ho">URL Parameter</Link>
      <br />
      <Link to="/page2/ho?hoge">Query Parameter</Link>
    </div>
  );
};
