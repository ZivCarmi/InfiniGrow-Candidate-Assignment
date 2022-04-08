import { useState, useEffect } from "react";
import "./BreakdownField.css";

const BreakdownField = ({
  budgetBreakdown,
  budgetAllocation,
  setNewFieldValue,
}) => {
  const { month, sum } = budgetBreakdown;
  const [fieldValue, setFieldValue] = useState(sum);

  const handleChange = (e) => {
    // Clean commas in the number
    const value = e.target.value.replaceAll(",", "");

    if (isNaN(value)) return;

    setFieldValue(value);
  };

  const handleBlur = () => {
    // format number to only 2 decimals
    const formatNum = parseFloat(parseFloat(fieldValue).toFixed(2));

    setNewFieldValue({ ...budgetBreakdown, sum: formatNum });
  };

  useEffect(() => setFieldValue(sum), [sum]);

  return (
    <div className="single-field">
      <label htmlFor={month}>{month} 21</label>
      <div className="input-wrapper">
        <span className="currency">$</span>
        <input
          type="text"
          name={month}
          id={month}
          className="radiused-light light-shadow p-10-16 h-40"
          disabled={budgetAllocation === "Equal" ? "disabled" : null}
          value={fieldValue ? parseFloat(fieldValue).toLocaleString() : 0}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default BreakdownField;
