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
                    <br/>
                    <div className='col'>
                        <div className="jumbotron">
                            <br/>
                            <br/>
                            <h1 className="display-4" style={{color:"white"}}>Login Page</h1>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="row ">
                    <div className="col offset-3"><Button href="/login" variant="success" style={{height:"200px",width:"200px",display:"flex",justifyContent:"center" ,paddingTop:"80px"}}>Student</Button>{' '}</div>
                    <div className="col "><Button variant="success" href="/login_rec" style={{height:"200px",width:"200px",display:"flex",justifyContent:"center" ,paddingTop:"80px"}}>Recruitor</Button></div>

                </div>
            </div>
        </>
    );
};

export default Select_log;
