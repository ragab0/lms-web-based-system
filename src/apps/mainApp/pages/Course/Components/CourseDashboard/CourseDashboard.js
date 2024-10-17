import React, { useState, useEffect } from "react";
import "./CourseDashboard.css";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import Chapter from "../Chapter/Chapter";
import Tabs from "../../../../components/Tabs/Tabs";
import Skeleton from "react-loading-skeleton";

const tabs = ["Description", "Instructor", "Syllabus", "Reviews"];
const chapter = [
  { name: "Introduction to UX Design", lessonsCount: 5, long: "1 hour" },
  { name: "Introduction to UX Design", lessonsCount: 5, long: "1 hour" },
  { name: "Introduction to UX Design", lessonsCount: 5, long: "1 hour" },
];

export default function CourseDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="course-dashboard mt-5">
      <Tabs tabs={tabs} />
      <div className="tabs-content">
        <div className="course-desc-tab" id={tabs[0].toLocaleLowerCase()}>
          <div className="course_desc">
            <h4 className="text-dark fw-bold">Course Description</h4>
            {loading ? (
              <Skeleton count={3} /> 
            ) : (
              <p className="mb-4">
                This interactive e-learning course will introduce you to User
                Experience (UX) design, the art of creating products and services
                that are intuitive, enjoyable, and user-friendly. Gain a solid
                foundation in UX principles and learn to apply them in real-world
                scenarios through engaging modules and interactive exercises.
              </p>
            )}
          </div>
          <div className="certification">
            <h4 className="text-dark fw-bold">Certification</h4>
            {loading ? (
              <Skeleton count={2} />
            ) : (
              <p>
                At Byway, we understand the significance of formal recognition for
                your hard work and dedication to continuous learning. Upon
                successful completion of our courses, you will earn a prestigious
                certification that not only validates your expertise but also opens
                doors to new opportunities in your chosen field.
              </p>
            )}
          </div>
        </div>
        <div className="course-inst-tab" id={tabs[1].toLocaleLowerCase()}>
          {loading ? <Skeleton height={150} /> : <InstructorTab />}
        </div>
        <div className="course-syllabus-tab" id={tabs[2].toLocaleLowerCase()}>
          <h4 className="text-dark fw-bold mb-4">Syllabus</h4>
          <div className="chapters">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <Skeleton height={30} />
                </div>
              ))
              : chapter.map(({ name, lessonsCount, long }, i) => (
                <Chapter key={i} name={name} lessonsCount={lessonsCount} long={long} />
              ))}
          </div>
        </div>

        <div id={tabs[3].toLocaleLowerCase()} className="course-learner-reviews-tab">
          {loading ? <Skeleton height={150} /> : <LearnerReviews />}
        </div>
      </div>
    </div>
  );
}
