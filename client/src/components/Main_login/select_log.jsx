// import styles from "./styles.module.css";    
import Button from 'react-bootstrap/Button';

const Select_log = () => {
    // const handleLogout = () => {
    // 	localStorage.removeItem("token");
    // 	window.location.reload();
    // };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="jumbotron">
                        <h1 class="display-4">Login</h1>
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="row ">
                    <div className="col offset-3"><Button href="/login" variant="success">Student</Button>{' '}</div>
                    <div className="col "><Button variant="success" href="/login_rec">Recruitor</Button>{' '}</div>

                </div>
            </div>
        </>
    );
};

export default Select_log;
