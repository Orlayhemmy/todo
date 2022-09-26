const ProgressBar = ({ completed }) => {
  return (
    <div className="progress-bar">
      <span>{completed}% complete</span>
      <div className="progress-bar__line">
        <div className="progress-bar__line__progress" style={{ width: `${completed}%` }}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;