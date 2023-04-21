import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Create from "./pages/Create/Create";
import Forgot from "./pages/Forgot/Forgot"
import { AuthContextProvider } from "./context/auth";

function App() {
    return (
        // typescript irá aceitar o router, routes e route com nome do app e index sendo .tsx
            <Router>
                <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/create" element={<Create />}/>
                    <Route path="/feed" element={<Feed />}/>
                    <Route path="/forgot" element={<Forgot/>}/>
                </Routes>
                </AuthContextProvider>
            </Router>
    );
}

export default App;
