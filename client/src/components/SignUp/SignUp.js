import React,{useState} from "react";
import { Link } from "react-router-dom";
import FileBase from 'react-file-base64';

import "./SignUp.css"

const SignUp = () => {

    // const [formData, setFormData] = useState({
    //     username: '',
    //     email : '',
    //     password : '',
    //     password2 : ''
    // })
    // const handleChange = (e)=>{
    //     setFormData({...formData, [e.target.name] : e.target.value})
    // }
    return (
        <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image1"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Register</h3>
              <form>
              <div className="form-label-group">
                  <input type="text" className="form-control" id="inputFirstName" placeholder="Enter First Name ..." required autofocus />
                  <label for="inputFirstName">First Name</label>
                </div>
                <div className="form-label-group">
                  <input type="text" className="form-control" id="inputLastName" placeholder="Enter Last Name ..." required autofocus />
                  <label for="inputLastName">Last Name</label>
                </div>
                <div className="form-label-group">
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email address" required autofocus />
                  <label for="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                  <label for="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone ..." required autofocus />
                  <label for="inputPhone">Phone</label>
                </div>
                <div className="form-label-group">
                <FileBase type="file" multiple={false} /*onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}*/ />
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign Up</button>
                <div className="text-center">
                  <Link to="/signin">Sign In</Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default SignUp
