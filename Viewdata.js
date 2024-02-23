import React, { Component } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class Viewdata extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "", gender: "", email: "", mobile: ""
    }


  }
  componentDidMount() {
    debugger;
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
  render() {
    return (
      <>
        {/* <table border={1}>
          <tr>
            <th>ID </th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
          <tr>
            <td>{this.state.id}</td>
            <td>{this.state.name}</td>
            <td>{this.state.gender}</td>
            <td>{this.state.email}</td>
            <td>{this.state.mobile}</td>
          </tr>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.id}</td>
                    <td>{this.state.name}</td>
                    <td>{this.state.gender}</td>
                    <td>{this.state.email}</td>
                    <td>{this.state.mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
        </html>
      </>
    )
  }
}
export default withParams(Viewdata);

