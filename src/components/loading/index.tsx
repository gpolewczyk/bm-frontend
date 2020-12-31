import React from 'react';
import IconConnection from 'src/icons/flat-icons/connection';

const Loading: React.FC = () => {
  return (
    <div className="loading animate pulse">
      <IconConnection />
    </div>
  );
};

export default Loading;
