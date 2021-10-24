import React from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BeautyLabGrid from '../Components/BeautyLabGrid';

export default function Beauty() {
  const [openProductResults, setOpenProductResults] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState(null);

  return (
    <div id="wrapper">
      <Header 
        openProductResults={openProductResults}
        setOpenProductResults={setOpenProductResults}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
      />
      <BeautyLabGrid />
      <Footer />
    </div>
  );
}
