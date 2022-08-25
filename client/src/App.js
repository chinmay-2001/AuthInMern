import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Signup_rec from "./components/Singup/signup_rec";
import Login from "./components/Login";
import Select_log from "./components/Main_login/select_log";
import Login_recruitar from "./components/Login/login_recruitar";
// import Sidebar from "./components/dashboard/Sidebar";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/signup_rec" exact element={<Signup_rec />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/login_rec" exact element={<Login_recruitar/>}/>
			<Route path="/main_login" exact element={<Select_log />}/>
			<Route path="/" element={<Navigate replace to="/main_login" />} />
			{/* <Route path="/dashboard" element={<Sidebar/>}/> */}
		</Routes>
	);
}

export default App;
