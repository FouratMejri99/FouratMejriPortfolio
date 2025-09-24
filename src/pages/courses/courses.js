import "./courses.css";

export default function Courses({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{course.title}</h2>
        {course.image && (
          <img src={course.image} alt={course.title} className="modal-image" />
        )}
        <p>{course.fullDescription || course.description}</p>
        {course.links && (
          <div className="course-links">
            {course.links.live && (
              <a href={course.links.live} target="_blank" rel="noreferrer">
                Course Link
              </a>
            )}
            {course.links.github && (
              <a href={course.links.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
