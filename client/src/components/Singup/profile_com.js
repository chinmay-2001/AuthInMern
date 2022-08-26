import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Profile_com = () => {
	return(
        <>
        
        {/* <form name="myform" action=" " onSubmit={validateform}> */}
        <form name="myform" action=" " method="POST" > 
            <div className="p-3 mb-2 bg-info text-white">

            <div className="container">
                <div className="row">
                    <div className="jumbotron" >
                        <h1>Profile</h1>
                    </div>
                </div>

                {/* <!-- <h3>About</h3> --> */}
                <label>Name</label>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" name="fname" className="form-control" placeholder="First name"
                            aria-label="First name"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" name="lname" className="form-control" placeholder="Last name"
                            aria-label="Last name"/>
                    </div>
                </div>

              
                <div className="bootstrap-iso">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                {/* <!-- <form method="post"> --> */}
                                <div className="form-group ">
                                    <label className="control-label " for="date">Date of Birth</label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar">
                                            </i>
                                        </div>
                                        <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY"
                                            type="text" />
                                    </div>
                                </div>
                                {/* <!-- <div className="form-group"> */}
                                <div>
                                    <button className="btn btn-secondary" name="submit" type="submit">
                                        Set
                                    </button>
                                </div>
                            {/* </div> -->
                                <!-- </form> --> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Extra JavaScript/CSS added manually in "Settings" tab -->
                <!-- Include jQuery --> */}
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>

               
                <script type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />

                {/* <script>
                    $(document).ready(function () {
                        var date_input = $('input[name="date"]'); //our date input has the name "date"
                        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
                        date_input.datepicker({
                            format: 'mm/dd/yyyy',
                            container: container,
                            todayHighlight: true,
                            autoclose: true,
                        })
                    })
                </script> */}

                {/* <br><br> */}

                <label>Gender</label>
                <div className="form-check">
                    {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"> */}
                    <label className="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Do not want to mention
                    </label>
                </div>
                {/* <br>
                <br> */}

                <h3>Contact Details</h3>
                {/* <br> */}
                <div className="mb-3">
                    <label for="phone">Contact number</label>
                    <input type="tel" id="phone" name="mob" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </div>
                {/* <br> */}
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" name="mail" className="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                </div>
                {/* <br> */}
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Personal Email</label>
                    <input type="email" name="mail" className="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                </div>

                {/* <br> */}
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Permanent Address</label>
                    <textarea className="form-control" id="peradd" rows="3"></textarea>
                    <div className="row">
                        <div className="col-sm-4">
                            <input type="number" name="pin" className="form-control" placeholder="Pin code"
                                aria-label="pin"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="City" aria-label="city"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" name="name" className="form-control" placeholder="State" aria-label="state"/>
                        </div>
                    </div>
                </div>
                {/* <br> */}
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Current Address</label>
                    <textarea className="form-control" id="curadd" rows="3"></textarea>
                    <div className="row">
                        <div className="col-sm-4">
                            <input type="number" name="pin" className="form-control" placeholder="Pin code"
                                aria-label="pin"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="City" aria-label="city"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" name="name" className="form-control" placeholder="State" aria-label="state"/>
                        </div>
                    </div>
                </div>

                <br/>

                <h3>Education</h3>
                <h4>Current on going course</h4>

                <div className="col">
                    <label className="form-label">College Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                {/* <br> */}
                <div className="row">
                    <div className="col-sm-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Degree
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">BE/BTech</a></li>
                                <li><a className="dropdown-item" href="#">MTech</a></li>
                                <li><a className="dropdown-item" href="#">MBA</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Branch
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Computer Science and Engineering</a></li>
                                <li><a className="dropdown-item" href="#">Electronics and Telecommunication</a></li>
                                <li><a className="dropdown-item" href="#">Information Technology</a></li>
                                <li><a className="dropdown-item" href="#">Electrical</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pass Out Year
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">2023</a></li>
                                <li><a className="dropdown-item" href="#">2022</a></li>
                                <li><a className="dropdown-item" href="#">2021</a></li>
                                <li><a className="dropdown-item" href="#">2020</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <br><br><br> */}
                    <div className="mb-3">
                        <label for="phone">Latest CGPA</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                    </div>
                    {/* <br> */}
                    {/* <br> */}

                    <h4>className 12th</h4>

                    <div className="col">
                        <label className="form-label">School Name</label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    {/* <br> */}
                </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Exam Board
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">CBSE</a></li>
                                    <li><a className="dropdown-item" href="#">State Board</a></li>
                                    <li><a className="dropdown-item" href="#">ICSE</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Major
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">PCM</a></li>
                                    <li><a className="dropdown-item" href="#">PCB</a></li>
                                    <li><a className="dropdown-item" href="#">PCMB</a></li>
                                    <li><a className="dropdown-item" href="#">PCM-E</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Pass Out Year
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">2019</a></li>
                                    <li><a className="dropdown-item" href="#">2018</a></li>
                                    <li><a className="dropdown-item" href="#">2017</a></li>
                                    <li><a className="dropdown-item" href="#">2016</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <br><br><br> */}
                        <div className="mb-3">
                            <label for="phone">Percentage</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        </div>
                        {/* <br>
                        <br> */}

                        <h4>className 10th</h4>

                        <div className="col">
                            <label className="form-label">School Name</label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        {/* <br> */}
                    </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Exam Board
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">CBSE</a></li>
                                        <li><a className="dropdown-item" href="#">State Board</a></li>
                                        <li><a className="dropdown-item" href="#">ICSE</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pass Out Year
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">2017</a></li>
                                        <li><a className="dropdown-item" href="#">2016</a></li>
                                        <li><a className="dropdown-item" href="#">2015</a></li>
                                        <li><a className="dropdown-item" href="#">2014</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <br><br><br> */}
                            <div className="mb-3">
                                <label for="phone">Percentage</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                            </div>
                            {/* <br>
                            <br> */}

                            <h3>Internship and Work Experience</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Title</label>
                                    <input type="text" className="form-control" placeholder="First name"
                                        aria-label="First name"/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Company Name</label>
                                    <input type="text" className="form-control" placeholder="Last name"
                                        aria-label="Last name"/>
                                </div>
                            </div>

                            {/* <br> */}

                            {/* <!-- HTML Form (wrapped in a .bootstrap-iso div) --> */}
                            <div className="bootstrap-iso">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group ">
                                                <label className="control-label " for="date">Start Date</label>
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-calendar">
                                                        </i>
                                                    </div>
                                                    <input className="form-control" id="date" name="date"
                                                        placeholder="MM/DD/YYYY" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group ">
                                                <label className="control-label " for="date">End Date</label>
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-calendar">
                                                        </i>
                                                    </div>
                                                    <input className="form-control" id="date" name="date"
                                                        placeholder="MM/DD/YYYY" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <label>Mode</label>
                            <div className="row">
                                <div className="form-check col-sm-6">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1"/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Online
                                    </label>
                                </div>
                                <div className="form-check col-sm-6">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Offline
                                    </label>
                                </div>
                            </div>
                            {/* <br><br> */}

                            <h3>Skills</h3>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Technical Skills</label>
                                <textarea placeholder="Enter comma(,) separated technical skills..."
                                    className="form-control" id="peradd" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Soft Skills</label>
                                <textarea placeholder="Enter comma(,) separated soft skills..." className="form-control"
                                    id="peradd" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Languages</label>
                                <textarea placeholder="Enter comma(,) separated languages that you know..."
                                    className="form-control" id="peradd" rows="3"></textarea>
                            </div>
                            {/* <!-- <h5>Proficiency</h5> */}
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">Java</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">SQL</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">Python</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">Django</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">C</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        <div className="mb-3">
                            <label for="customRange2" className="form-label">C++</label>
                            <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                        {/* <br> */}
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Soft Skills</label>
                            <textarea className="form-control" id="peradd" rows="2"></textarea>
                        </div> 
                            {/* <br> */}

                            <h3>Resume</h3>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Upload</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                            {/* <br><br> */}

                            <h3>Certificates</h3>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Upload Multiple</label>
                                <input id="input-2" name="input2[]" type="file" className="file" data-show-upload="false"
                                    data-show-caption="true" multiple/>
                            </div>
                            {/* <br><br> */}

                            


                        </div>
                    </div>
            </form>
        </>
    )
};

export default Profile_com
