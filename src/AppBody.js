// <AppBody />
function AppBody() {
  return (
    <div>
      <AppBodyContent />
      <AppBodyActions />
    </div>
  );
}

// We can create seprate file
function AppBodyContent() {
  return (
    <div className="alert alert-success m-0">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit a pariatur
      explicabo suscipit quas delectus cumque quis tenetur sed, saepe in
      asperiores magnam minima voluptatibus, ducimus assumenda doloremque omnis.
      Molestiae nobis laborum asperiores dolores. Aspernatur accusantium, ipsum
      voluptate molestias hic modi dolorem laboriosam sequi ut aliquam commodi
      dolor nemo ratione porro veniam repellendus nostrum nam. Atque sit ipsam,
      repudiandae deserunt odit expedita doloribus. Tempore dolorum cum itaque
      sequi, voluptatem laborum eum possimus repudiandae eius earum architecto
      fugiat sed officia hic dolorem quod enim provident amet. Commodi nam natus
      aut, quod eaque, nemo facilis !
    </div>
  );
}

function AppBodyActions() {
  return (
    <div className="mb-3">
      <div className="badge bg-primary">React &#128526;</div>
      <div className="badge bg-warning">Like &#128527;</div>
      <div className="badge bg-danger">Comment &#128528;</div>
      <div className="badge bg-success">Share &#128530;</div>
    </div>
  );
}

export default AppBody;
