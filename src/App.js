import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header";
import Home from "./components/page";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/page/Task/SinglePost";
import Task from "./components/page/Task/Task";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Task />} path="/posts-list" exact />
        <Route element={<SinglePost />} path="/:id" exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
