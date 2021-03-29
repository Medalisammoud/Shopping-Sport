import React from "react";
import { useSelector } from "react-redux";

import "./Profile.css";

const Profile = () => {
    const user = useSelector(state => state.userReducer.user)
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src={user.image}
                alt="user"
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user.firstName}</h5>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div className="profile col-md-12">
          <div className="tab-content profile-tab" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>First Name</label>
                </div>
                <div className="col-md-6">
                  <p>{user.firstName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Last Name</label>
                </div>
                <div className="col-md-6">
                  <p>{user.lastName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
