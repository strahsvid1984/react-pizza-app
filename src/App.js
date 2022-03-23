import "./assets/scss/app.scss";
import Header from "./components/header/Header";
import ContentTop from "./components/content/ContentTop";
import ContentTitle from "./components/content/ContentTitle";
import ContentItems from "./components/content/ContentItems";

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
