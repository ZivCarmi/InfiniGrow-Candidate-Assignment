import "./BreakdownDesc.css";

const BreakdownDesc = () => {
  return (
    <div className="budget-breakdown-desc">
      <h3 className="title">Budget Breakdown</h3>
      <div className="description">
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </div>
    </div>
  );
};

export default BreakdownDesc;
