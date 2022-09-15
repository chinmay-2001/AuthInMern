import { Route, Routes, Navigate } from "react-router-dom";

import Signup from "./components/Singup";
import Signup_rec from "./components/Singup/signup_rec";
import Login from "./components/Login";
import Select_log from "./components/Main_login/select_log";
import Login_recruitar from "./components/Login/login_recruitar";
import Profile_com from "./components/Singup/profile_com";
import Dashboard from "./components/UI_comp/Dashboard"
import Sidebar_copy from "./components/UI_comp/Sidebar_copy"

function App() {
	
	const user = localStorage.getItem("token");

	return (
		<Routes>
			
			{user && <Route path="/" exact element={<><Sidebar_copy/><Dashboard flag="1"/></>} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/signup_rec" exact element={<Signup_rec />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/login_rec" exact element={<Login_recruitar/>}/>
			<Route path="/main_login" exact element={<Select_log />}/>
			<Route path="/" element={<Navigate replace to="/main_login" />} />
			
			
			<Route path="/profile" exact element={<><Sidebar_copy/><Dashboard flag="1"/></>}>
			</Route>
			<Route path="/profile/update" exact element={<Profile_com/>}/>
			
		</Routes>
	);
}

export default App;
