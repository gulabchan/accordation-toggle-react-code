import React, { useState } from "react";

function Accordion() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div onClick={toggleAccordion}>
        <h3>Accordion Header</h3>
      </div>
      {!isCollapsed && (
        <div>
          <p>Accordion Content</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
