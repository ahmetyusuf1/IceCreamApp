import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-4">
      <div className="d-flex gap-1">
        <input
          onChange={(e) => setIsChecked(e.target.checked)}
          type="checkbox"
          className="form-check-input"
          id="terms"
        />
        <div className="terms-box">
          <p style={{ visibility: isHover ? "visible" : "hidden" }}>
            We will deliver your order as soon as possible
          </p>
          <label htmlFor="terms">I have read and accept the terms</label>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Accept Order
      </button>
    </div>
  );
};

export default Form;
