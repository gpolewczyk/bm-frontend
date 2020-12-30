import React from 'react';

interface ComponentProps {
  label: string;
  disabled: boolean;
}

const Submit: React.FC<ComponentProps> = ({ label, disabled }) => {
  return (
    <div className="form__row">
      <button className="form__submit btn" type="submit" disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Submit;
