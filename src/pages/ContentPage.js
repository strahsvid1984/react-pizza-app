import React from "react";
import ContentTop from "../components/content/ContentTop";
import ContentTitle from "../components/content/ContentTitle";
import ContentItems from "../components/content/ContentItems";

const ContentPage = () => {
  return (
    <div className="content">
      <div className="container">
        <ContentTop />
        <ContentTitle />
        <ContentItems />
      </div>
    </div>
  );
};

export default ContentPage;
