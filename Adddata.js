import axios from 'axios';
import Swal from 'sweetalert2';
import React from 'react';

class Adddata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "", gender: "", email: "", mobile: "", password: ""
        }
    }
    submitValue(event) {
        var myform = new FormData();
        myform.append('st_name', this.state.name);
        myform.append('st_gender', this.state.gender);
        myform.append('st_email', this.state.email);
        myform.append('st_mobileno', this.state.mobile);
        myform.append('st_password', this.state.password);

        axios.post("https://akashsir.in/myapi/crud/student-add-api.php", myform)
            .then(res => {
                console.log(res)
                if (res.data.flag === '1') {
                    //alert('Done' + res.data.message)
                    Swal.fire({
                        icon: 'success',
                        title: 'Record Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //alert('Something went wrong'+  res.data.message);
                }
            })
            .catch((error) => {
                alert("Error Ocurred :" + error);
                console.log(error)
            })
        event.target.reset();
        event.preventDefault();
    }

    Change(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <>
                {/* <form onSubmit={this.submitValue.bind(this)}>
                    Name : <input type="text" onChange={this.Change.bind(this)} name="name" /> <br />
                    Gender : <input type="text" onChange={this.Change.bind(this)} name="gender" /><br />
                    Email : <input type="text" onChange={this.Change.bind(this)} name="email" /> <br />
                    Mobile : <input type="text" onChange={this.Change.bind(this)} name="mobile" /><br />
                    Password : <input type="text" onChange={this.Change.bind(this)} name="password" /> <br />
                    <input type="submit" value="Add" />
                </form> */}
                <html>
                    <head>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <link rel="stylesheet" type="text/css" href="css/opensans-font.css" />
                        <link rel="stylesheet" type="text/css" href="fonts/line-awesome/css/line-awesome.min.css" />

                        <link rel="stylesheet" href="https://jqueryvalidation.org/files/demo/site-demos.css" />

                        <link rel="stylesheet" href="css/style.css" />
                    </head>
                    <body class="form-v7">
                        <div class="page-content">
                            <div class="form-v7-content">
                                <div class="form-left">
                                    <img src="image/ai.jpg" alt="form"/>
                                        <p class="text-2">Privaci policy & Term of service</p>
                                </div>
                                <form class="form-detail" action="#" method="post" id="myform" onSubmit={this.submitValue.bind(this)}>
                                    <div class="form-row">
                                        <label for="username">USERNAME</label>
                                        <input type="text" onChange={this.Change.bind(this)} name="name" />
                                    </div>
                                    <div class="form-row">
                                        <label for="your_email">GENDER</label>
                                        <input type="text" onChange={this.Change.bind(this)} name="gender" />                                    </div>
                                    <div class="form-row">
                                        <label for="password">E-MAIL</label>
                                        <input type="text" onChange={this.Change.bind(this)} name="email" />
                                    </div>
                                    <div class="form-row">
                                        <label for="comfirm_password">MOBILE</label>
                                        <input type="text" onChange={this.Change.bind(this)} name="mobile" />
                                    </div>
                                    <div class="form-row">
                                        <label for="comfirm_password">PASSWORD</label>
                                        <input type="text" onChange={this.Change.bind(this)} name="password" />
                                    </div>
                                    <div class="form-row-last">
                                        <input type="submit" name="register" class="register" value="ADD DATA"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
                        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
                        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
                    </body>
                </html>
            </>
        )
    }
}
export default Adddata;

