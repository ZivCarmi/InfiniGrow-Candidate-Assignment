import { useState } from "react";
import "./TabsNav.css";

const TabsContent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const tabSwitch = (e, label) => {
    e.preventDefault();
    setActiveTab(label);
  };

  return (
    <div className="app-content">
      <ul className="tabs-nav">
        {children.map((tab) => {
          const { label } = tab.props;

          return (
            <li className="tab-item" key={label}>
              <button
                type="button"
                className={`tab-link${
                  label === activeTab ? " tab-active" : ""
                }`}
                onClick={(e) => tabSwitch(e, label)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      {children.map((tab) => {
        const { label } = tab.props;

        return label === activeTab ? tab : null;
      })}
    </div>
  );
};

export default TabsContent;
