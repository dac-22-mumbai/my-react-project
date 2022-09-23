import { useNavigate, useSearchParams } from "react-router-dom";

function SimpleForm() {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let isedit = searchParams.get("edit");

  const go2simplelist = () => {
    navigate("/simplelist");
  };

  return (
    <div>
      <div className="alert alert-light h1 m-0">Basic Form</div>

      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Username"
        />

        <input
          className="form-control form-control-lg mb-1"
          type="password"
          placeholder="Enter Password"
        />

        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Email"
        />

        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Mobile"
        />

        {isedit ? (
          <input
            className="btn btn-lg btn-success w-100"
            type="button"
            value="Update"
            onClick={go2simplelist}
          />
        ) : (
          <input
            className="btn btn-lg btn-success w-100"
            type="button"
            value="Submit"
            onClick={go2simplelist}
          />
        )}
      </div>
    </div>
  );
}

export default SimpleForm;
