import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Displaydata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mydata: [],
        }
    }
    componentDidMount() {
        axios.get("https://akashsir.in/myapi/crud/student-display-api.php")
            .then(res => {
                console.log(res);
                this.setState({ mydata: res.data.student_list });
            }).catch((error) => {
                alert("Error Ocurred :" + error);
                console.log(error)
            })
    }
    deleteData(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var myform = new FormData();
                myform.append('st_id', id);
                axios.post("https://akashsir.in/myapi/crud/student-delete-api.php", myform)
                    .then((res) => {
                        console.log(res.data)
                        //alert(res.data.message);
                        Swal.fire({
                            icon: 'success',
                            title: 'Record deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }).catch((error) => {
                        //alert("Error Ocurred :" + error);
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occured!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log(error)
                    })
            }
        });

    }
    render() {
        return (
            <>
                {/* <table border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mydata && this.state.mydata.length ? (this.state.mydata.map((values, i) =>
                            <>
                                <tr key={i + 1}>
                                    <td key={values.st_id}>{i + 1}</td>
                                    <td>{values.st_name}</td>
                                    <td>{values.st_gender}</td>
                                    <td>{values.st_email}</td>
                                    <td>{values.st_mobileno}</td>
                                    <td>
                                        <Link to={'/Editdata/' + values.st_id}>Edit</Link> |
                                        <Link to={`/Viewdata/${values.st_id}`}>View</Link> |
                                        <input type='button' onClick={() => this.deleteData(values.st_id)} value='Delete' />
                                    </td>
                                </tr>
                            </>
                        )) : "No Record Found"}
                    </tbody>
                </table> */}
                <html >
                    <head>
                        <meta charset="UTF-8" />
                        <link rel="stylesheet" href="css/style.css" />
                    </head>
                    <body>
                        <div class="container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.mydata && this.state.mydata.length ? (this.state.mydata.map((values, i) =>
                                        <>
                                            <tr key={i + 1}>
                                                <td key={values.st_id}>{i + 1}</td>
                                                <td>{values.st_name}</td>
                                                <td>{values.st_gender}</td>
                                                <td>{values.st_email}</td>
                                                <td>{values.st_mobileno}</td>
                                                <td><Link to={`/Viewdata/${values.st_id}`}><button className='button'>View</button></Link></td>
                                                <td><Link to={'/Editdata/' + values.st_id}><button className='button'>Edit</button></Link></td>
                                                <td><button onClick={() => this.deleteData(values.st_id)} className='button'>Delete</button></td>
                                            </tr>
                                        </>
                                    )) : "No Record Found"}
                                </tbody>
                            </table>
                        </div>
                    </body>
                </html>

            </>
        )
    }
}
export default Displaydata;


