
import React from "react";

const User = ({user,i}) => {
  return (
    <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0">{user.firstName}</h5>
      </td>
      <td>
        <span className="text-muted">{user.lastName}</span>
      </td>
      <td>
        <span className="text-muted">{user.email}</span>
      </td>
      <td>
        <span className="text-muted">{user.phone}</span>
      </td>
      <td>
        <span className="text-muted">{user.role===1 ? "Admin" : "User"}</span>
      </td>
    </tr>
  );
};

export default User;
