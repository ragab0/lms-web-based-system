import React, { useEffect } from "react";
import "./CoursesPage.css";
import LineOfInstructors from "../../components/LineOfInstructors/LineOfInstructors";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import PaginationMain from "../../../../components/PaginationMain/PaginationMain";
import CoursesList from "./components/CoursesList/CoursesList";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../../store/slices/coursesSlice";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import SortOptions from "./components/SortOptions/SortOptions";
import NoContent from "../../../../components/NoContent/NoContent";

export default function CoursesPage() {
  const dispatch = useDispatch();
  const {
    apiData: { totalPages, page: activePage },
  } = useSelector((state) => state.courses.publicCourses);

  useEffect(
    function () {
      dispatch(getCourses());
    },
    [dispatch]
  );

  return (
    <div className="courses-page container">
      <h1>Design Courses</h1>
      <h3 className="mt-4">All Development Courses</h3>
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <FilterOptions />
        </div>
        <div className="col-lg-9 col-md-9">
          <SortOptions />
          <CoursesList />
          <PaginationMain
            totalPages={totalPages}
            activePage={activePage}
            pageSize={10}
            thunkAction={getCourses}
          />
        </div>
        <LineOfInstructors title="Popular Mentors" />
        <LineOfCourses title="Featured Courses" />
      </div>
    </div>
  );
}
