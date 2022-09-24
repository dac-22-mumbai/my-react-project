import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SimpleList() {
  let navigate = useNavigate();
  let [list, setList] = useState([]);

  const go2simpleform = (item, index) => {
    navigate(`/simpleform?edit=true&id=${index}`);
  };

  const makeApiCall = async () => {
    const url = "http://localhost:8080/user/";

    const response = await axios.get(url);

    const newlist = response.data;
    setList(newlist);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

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
              <th scope="row">{item.id}</th>
              <td>{item.username}</td>
              <td>{"*****"}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <span
                  className="badge bg-primary"
                  role="button"
                  onClick={() => go2simpleform(item, index)}
                >
                  Edit
                </span>
                <span className="badge bg-danger" role="button">
                  Del
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleList;
