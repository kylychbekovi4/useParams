import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Parent from "./pages/parent/Parent";
const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Parent />}></Route>
				<Route path="main" element={<Main />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/home" element={<Home />}></Route>
			</Routes>

		</>
	);
};

export default App;
