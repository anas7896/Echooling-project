import React from 'react';
import Header from './Header/Header';
import Narbar from './Navbar/Narbar';
import Slider from './Sliderimg/Slider';
import Button from './Button/Button';
import Academics from './Academics/Academics';
import Crad1 from './Card/Crad1';
import Welcome from './Welcome/Welcome';
import Popular from './PopularCourse/Popular';
import Upcomming from './Upcomming-Events/Upcomming';
import Justin from './Justin/Justin';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <div>
      <Header/>
      <Narbar/>
      <Slider/>
      <Button tittle="Admission"/>
      <Academics text="Academics" immm="./download.png"/>
      <Crad1/>
      <Welcome/>
      <Popular/>
      <Upcomming/>
      <Justin/>
      <Footer/>
    </div>
  );
};

export default App;
