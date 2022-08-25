import styles from "./styles.module.css";
// import Button from 'react-bootstrap/Button';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Registration</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			{/* <Button variant="outline-primary">Primary</Button>{' '} */}
			
		</div>
		{/* <div className="container">
				<div className="row">
					<Button variant="outline-success" href="/dashboard">Success</Button>{' '}
				</div>
		</div> */}
		</>
	);
};

export default Main;
