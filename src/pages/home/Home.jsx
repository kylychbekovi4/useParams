import { useState } from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
	const [data, setData] = useState([]);

	const getTodos = async () => {
		const response = await axios.get(url);
		setData(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	const navigate = useNavigate();
	const handleExit = () => {
		localStorage.removeItem("title" );
		localStorage.removeItem("password" );
		navigate("/login");
	};

	return (
		<div className={scss.Home}>
			{data.map((item) => (
				<div className={scss.cards} key={item.id}>
					<h1>{item.title}</h1>
					<p>{item.password}</p>
				</div>
			))}
			<div className={scss.button_exit}>
				<button onClick={handleExit}>Exit</button>
			</div>
		</div>
	);
};

export default Home;
