import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Create from "./pages/Create/Create";
import Forgot from "./pages/Forgot/Forgot";

function App() {
    // no app foi utilizado para as Rotas
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/create" element={<Create />}></Route>
                    <Route path="/feed" element={<Feed />}></Route>
                    <Route path="/forgot" element={<Forgot />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
