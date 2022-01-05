import React, { useRef } from "react";
import "./Dropdown.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    //user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      //user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

function Dropdown({
  icon,
  badge,
  customToggle,
  contentData,
  renderItems,
  renderFooter,
}) {
  const dropdown_content_el = useRef(null);
  const dropdown_toggle_el = useRef(null);
  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {icon ? <i className={icon}></i> : ""}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : ""}
        {customToggle ? customToggle : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {contentData && renderItems
          ? contentData.map((item, index) => renderItems(item, index))
          : ""}
        {renderFooter ? (
          <div className="dropdown__footer">{renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dropdown;
