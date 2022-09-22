function App() {
  return (
    <div>
      <AppHeader />

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
        enim provident amet. Commodi nam natus aut, quod eaque, nemo facilis
        saepe odio provident, quis error culpa consectetur! Earum fuga minus
        numquam, sed omnis officiis sunt assumenda quia beatae a, obcaecati
        eaque nihil explicabo debitis maiores vel. Excepturi totam quas sit quam
        nihil beatae maxime numquam commodi asperiores voluptatibus inventore
        dolores similique perspiciatis ratione saepe magnam, qui atque,
        quibusdam, repellat sequi deleniti? Molestias nam non numquam, nesciunt,
        veniam laudantium unde omnis debitis ullam quidem quis eveniet
        reiciendis laborum assumenda iste? Minus soluta quasi placeat enim amet.
        Adipisci quasi rerum ullam odit labore perspiciatis. Rem, sapiente
        facere odio dolores illo dignissimos ea alias tempora nam vitae,
        perferendis eaque atque debitis quos voluptatum animi voluptatibus
        veniam commodi minus iste laudantium!
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
