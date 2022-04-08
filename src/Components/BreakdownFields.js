import BreakdownField from "./BreakdownField";
import "./BreakdownFields.css";

const BreakdownFields = ({ channel, setNewFieldValue }) => {
  const { budgetBreakdown, budgetAllocation } = channel;

  return (
    <div className="breakdown-fields">
      {budgetBreakdown.map((field) => (
        <BreakdownField
          budgetBreakdown={field}
          budgetAllocation={budgetAllocation}
          setNewFieldValue={setNewFieldValue}
          key={field.month}
        />
      ))}
    </div>
  );
};

export default BreakdownFields;
