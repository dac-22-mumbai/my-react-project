function SimpleForm() {
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

        <input
          className="btn btn-lg btn-success w-100"
          type="button"
          value="Submit"
        />
      </div>
    </div>
  );
}

export default SimpleForm;
