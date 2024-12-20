import React from "react";
import "./HomePage.css";
import Header from "./components/Header/Header";
// import Statistics from "./components/Statistics/Statistics";
// import TopCategories from "./components/TopCategories/TopCategories";
// import Parteners from "../../../../assets/parteners.png";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import About from "./components/About/About";
import LineOfInstructors from "../../components/LineOfInstructors/LineOfInstructors";
import Benefits from "./components/Benefits/Benefits";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Benefits />
      <LineOfCourses title="Top Courses" mt={true} />
      <LineOfInstructors title="Top Instructors" mt={true} />
      <CustomerComments />
      <About />
    </div>
  );
}
