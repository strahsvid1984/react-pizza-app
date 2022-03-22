import "./scss/app.scss";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import ContentTitle from "./components/ContentTitle";
import ContentItems from "./components/ContentItems";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <ContentTop />
          <ContentTitle />
          <ContentItems />
        </div>
      </div>
    </div>
  );
}

export default App;
