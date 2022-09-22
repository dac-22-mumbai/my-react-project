function App() {
  return (
    <div>
      <AppHeader />

      <AppBody />
      <AppBody />
      <AppBody />

      <AppFooter />
    </div>
  );
}

// <AppHeader />
function AppHeader() {
  return (
    <div>
      <h1 className="bg-success text-light p-3">App Header</h1>
    </div>
  );
}

// <AppBody />
function AppBody() {
  return (
    <div>
      <div className="alert alert-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit a pariatur
        explicabo suscipit quas delectus cumque quis tenetur sed, saepe in
        asperiores magnam minima voluptatibus, ducimus assumenda doloremque
        omnis. Molestiae nobis laborum asperiores dolores. Aspernatur
        accusantium, ipsum voluptate molestias hic modi dolorem laboriosam sequi
        ut aliquam commodi dolor nemo ratione porro veniam repellendus nostrum
        nam. Atque sit ipsam, repudiandae deserunt odit expedita doloribus.
        Tempore dolorum cum itaque sequi, voluptatem laborum eum possimus
        repudiandae eius earum architecto fugiat sed officia hic dolorem quod
        enim provident amet. Commodi nam natus aut, quod eaque, nemo facilis !
      </div>
    </div>
  );
}

// <AppFooter />
function AppFooter() {
  return (
    <div>
      <div className="bg-secondary text-light p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat
        similique sequi eaque corporis hic voluptas non, officia possimus
        voluptates.
      </div>
    </div>
  );
}
export default App;
