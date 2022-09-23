import { useState } from "react";

function SimpleList() {
  let [list] = useState(Array.from({ length: 10 }));

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>ROHIT</td>
              <td>{"*****"}</td>
              <td>rohit@gmail.com</td>
              <td>1212121212</td>
              <td>
                <span className="badge bg-primary">Edit</span>
                <span className="badge bg-danger">Del</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleList;
