import { Route, Routes, Navigate } from "react-router-dom";

import Signup from "./components/Singup";
import Signup_rec from "./components/Singup/signup_rec";
import Login from "./components/Login";
import Select_log from "./components/Main_login/select_log";
import Login_recruitar from "./components/Login/login_recruitar";
import Profile_com from "./components/Singup/profile_com";
import Dashboard from "./components/UI_comp/Dashboard"
import Sidebar_copy from "./components/UI_comp/Sidebar_copy"
import Sidebar_rec from "./components/UI_comp/Sidebar_rec"
import Dashboard_rec from "./components/UI_comp/Dashboard_rec";

function App() {
	
	const user = localStorage.getItem("token");
	const rec=localStorage.getItem("token1");

	return (
		<Routes>
			
			{user && <Route path="/" exact element={<><Sidebar_copy/><Dashboard flag="1"/></>} />}
			{rec && <Route path="/" exact element={<><Sidebar_rec/><Dashboard_rec flag="1"/></>}/>}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/signup_rec" exact element={<Signup_rec />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/login_rec" exact element={<Login_recruitar/>}/>
			<Route path="/main_login" exact element={<Select_log />}/>
			<Route path="/main_rec" exact element={<><Sidebar_rec/><Dashboard_rec flag="1"/></>}/>
			<Route path="/" element={<Navigate replace to="/main_login" />} />
			<Route path="/" exact element={<><Sidebar_copy/><Dashboard flag="1"/></>}></Route>
			<Route path="/profile/status" exact element={<><Sidebar_copy/><Dashboard flag="2"/></>}></Route>
			<Route path="/profile/update" exact element={<Profile_com/>}/>
			
			<Route path='/AddLink' exact element={<><Sidebar_rec/><Dashboard_rec flag="1"/></>}/>
			
		</Routes>
	);
}

export default App;
