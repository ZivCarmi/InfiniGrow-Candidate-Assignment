import { useState } from "react";
import "./TabsContent.css";

const TabsContent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  // Switch between tabs
  const switchTab = (label) => setActiveTab(label);

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
                onClick={() => switchTab(label)}
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
