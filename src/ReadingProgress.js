import React from 'react';

const ReadingProgress = ({ progress }) => {
  return (
    <div className="reading-progress-bar">
      <div
        className="reading-progress-bar-inner"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ReadingProgress;
