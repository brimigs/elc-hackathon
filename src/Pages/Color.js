import React from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SkinResultsGrid from "../Components/SkinResultsGrid"

export default function Color() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div id="wrapper">
      <Header 
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      <SkinResultsGrid
        submitted={submitted}
      />
      <Footer />
    </div>

  );
}
