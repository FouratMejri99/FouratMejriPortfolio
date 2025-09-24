import "./paper.css"; // separate CSS for modal styling

export default function Papers({ paper, onClose }) {
  if (!paper) return null; // Do not render if no paper is selected

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{paper.title}</h2>
        {paper.image && (
          <img src={paper.image} alt={paper.title} className="modal-image" />
        )}
        <p>{paper.fullDescription || paper.description}</p>
        {paper.links && (
          <div className="paper-links">
            {paper.links.live && (
              <a href={paper.links.live} target="_blank" rel="noreferrer">
                Paper Link
              </a>
            )}
            {paper.links.github && (
              <a href={paper.links.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
