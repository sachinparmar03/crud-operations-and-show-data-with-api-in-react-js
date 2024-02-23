import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class Editdata extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "", gender: "", email: "", mobile: ""
        }
    }
    componentDidMount() {
        let { id } = this.props.params;
        axios.get(`https://akashsir.in/myapi/crud/student-profile-api.php?st_id=${id}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    id: res.data.st_id,
                    name: res.data.st_name,
                    gender: res.data.st_gender,
                    email: res.data.st_email,
                    mobile: res.data.st_mobileno
                });

            }).catch((error) => {
                alert("Error Ocurred :" + error);
                console.log(error)
            })
    }
    submitValue(event) {
        event.preventDefault();

        var myformdata = new FormData();
        myformdata.append('st_id', this.state.id);
        myformdata.append('st_name', this.state.name);
        myformdata.append('st_gender', this.state.gender);
        myformdata.append('st_email', this.state.email);
        myformdata.append('st_mobileno', this.state.mobile);

        console.log(myformdata);

        axios.post("https://akashsir.in/myapi/crud/student-update-api.php", myformdata)
            .then(res => {
                console.log(res)
                if (res.data.flag === '1') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Record Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    alert('Something went wrong');
                }
            })
            .catch(err => console.log(err));
    }

    Change(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <>
                {/* <h3>Edit</h3>
                <form onSubmit={this.submitValue.bind(this)}>
                    Name : <input type="text" value={this.state.name} onChange={this.Change.bind(this)} name='name'/> <br />
                    Gender : <input type="text" value={this.state.gender} onChange={this.Change.bind(this)} name='gender' /><br />
                    Email : <input type="text" value={this.state.email} onChange={this.Change.bind(this)} name='email' /> <br />
                    Mobile : <input type="text" value={this.state.mobile} onChange={this.Change.bind(this)} name='mobile'/><br />
                    <input type="submit" value="update"/>
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
                                <form class="form-detail" action="#" method="post" id="myform" onSubmit={this.submitValue.bind(this)}>
                                    <div class="form-row">
                                        <label for="username">USERNAME</label>
                                        <input type="text" value={this.state.name} onChange={this.Change.bind(this)} name='name' class="input-text" />
                                    </div>
                                    <div class="form-row">
                                        <label for="your_email">E-MAIL</label>
                                        <input type="text" value={this.state.gender} onChange={this.Change.bind(this)} name='gender' class="input-text" />
                                    </div>
                                    <div class="form-row">
                                        <label for="password">PASSWORD</label>
                                        <input type="text" value={this.state.email} onChange={this.Change.bind(this)} name='email' class="input-text" />
                                    </div>
                                    <div class="form-row">
                                        <label for="comfirm_password">CONFIRM PASSWORD</label>
                                        <input type="text" value={this.state.mobile} onChange={this.Change.bind(this)} name='mobile' class="input-text" />
                                    </div>
                                    <div class="form-row-last">
                                            <input type="submit" name="register" class="register" value="Update" />
                                            <Link to="/Displaydata"><input type="button" name="register" class="register2" value="Back to Display" /></Link>
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
export default withParams(Editdata);
