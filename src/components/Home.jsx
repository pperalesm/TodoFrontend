import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Login">
      <h1>HOME PAGE</h1>
      <p>
        Click <Link to="/login">here</Link> to navigate to the Login page.
      </p>
      <p>
        Click <Link to="/todo">here</Link> to navigate to the Todo List page.
      </p>
    </div>
  );
}

export default Home;
