import { useState } from "react";
import Courses from "../courses/courses";
import courses from "../courses/coursesdata";
import Papers from "../papers/papers";
import papers from "../papers/papersdata";
import Project from "../project/projects";
import projects from "../project/projectsData";

export default function Content() {
  const [selectedTab, setSelectedTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const renderContent = () => {
    switch (selectedTab) {
      case "projects":
        return projects.map((proj) => (
          <div
            key={proj.id}
            className="card"
            onClick={() => setSelectedProject(proj)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{ cursor: "pointer" }}
            />
            <h3>{proj.title}</h3>
            <p>{proj.fullDescription.split(".")[0]}.</p>
          </div>
        ));

      case "courses":
        return courses.map((course) => (
          <div
            key={course.id}
            className="card"
            onClick={() => setSelectedCourse(course)}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ cursor: "pointer" }}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ));

      case "papers":
        return papers.map((paper) => (
          <div
            key={paper.id}
            className="card"
            onClick={() => setSelectedPaper(paper)}
          >
            <img
              src={paper.image}
              alt={paper.title}
              style={{ cursor: "pointer" }}
            />
            <h3>{paper.title}</h3>
            <p>{paper.description}</p>
          </div>
        ));

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Buttons */}
      <div className="button-group" style={{ marginBottom: "20px" }}>
        {["projects", "courses", "papers"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              backgroundColor: selectedTab === tab ? "#007bff" : "#f0f0f0",
              color: selectedTab === tab ? "#fff" : "#000",
              marginRight: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div
        className="cards-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "10px", // reduced gap
          justifyContent: "center",
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        {renderContent()}
      </div>

      {/* Modals */}
      {selectedProject && (
        <Project
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedCourse && (
        <Courses
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
      {selectedPaper && (
        <Papers paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
      )}
    </div>
  );
}
