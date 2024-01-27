import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="d-flex items-center justify-between flex-direction-column mt-10">
      <h2>This page cannot be found</h2>
      <p>The URL is not correct</p>
      <Link to="/" className="notFound">
        Back to the homepage...
      </Link>
    </div>
  );
};

export default Page404;
