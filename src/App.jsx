import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth, Home, Orders, Tables } from "./pages/index";
import Header from "./components/shared/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </Router>
  );
}

export default App;
