import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Login from "./components/Login.jsx";
import TodoList from "./components/TodoList.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Todo App">
      <Router>
        <Header />
        <Row>
          <Col></Col>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Col>
          <Col></Col>
        </Row>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
