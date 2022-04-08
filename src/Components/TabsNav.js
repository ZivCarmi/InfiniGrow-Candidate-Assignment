import "./TabsNav.css";

const TabsNav = () => {
  return (
    <div className="tabs-nav">
      <button type="button" className="tab-link tab-active" data-tab="one">
        Tab 1
      </button>
      <button type="button" className="tab-link" data-tab="two">
        Tab 2
      </button>
    </div>
  );
};

export default TabsNav;
