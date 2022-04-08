import BreakdownDesc from "./BreakdownDesc";
import BreakdownFields from "./BreakdownFields";
import "./BudgetBreakdown.css";

const BudgetBreakdown = ({ channel, newFieldValue, setNewFieldValue }) => {
  return (
    <div className="budget-breakdown radiused-light ">
      <BreakdownDesc />
      <BreakdownFields
        channel={channel}
        setNewFieldValue={setNewFieldValue}
        newFieldValue={newFieldValue}
      />
    </div>
  );
};

export default BudgetBreakdown;
