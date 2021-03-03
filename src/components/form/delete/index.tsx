import React from 'react';

interface ComponentProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

const Delete: React.FC<ComponentProps> = ({ label, disabled, onClick }) => {
  return (
    <div className="form__row">
      <button className="form__submit btn" type="button" disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Delete;
