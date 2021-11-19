import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import Home from "./views/home/component";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Another" element={<div><p>Another</p></div>}/>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
