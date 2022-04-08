import { useState, useContext, useEffect } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import BudgetFrequency from "./BudgetFrequency";
import BaselineBudget from "./BaselineBudget";
import BudgetAllocation from "./BudgetAllocation";
import BudgetBreakdown from "./BudgetBreakdown";
import "./ChannelContent.css";

const ChannelContent = ({ channel }) => {
  const { id, budgetFrequency, budgetBreakdown, budgetAllocation } = channel;
  const { handleChannelChange } = useContext(ChannelsContext);
  const [baselineBudget, setBaselineBudget] = useState(channel.baselineBudget);
  const [divideBy, setDivideBy] = useState(budgetBreakdown.length);
  const [dividedBudget, setDividedBudget] = useState(baselineBudget / divideBy);
  const [newFieldValue, setNewFieldValue] = useState({});

  // Update single breakdown field
  useEffect(() => {
    if (budgetAllocation === "Equal") return;
    if (!Object.keys(newFieldValue).length) return;

    // find the field we want to update
    const newFields = [...budgetBreakdown];
    const fieldIndex = newFields.findIndex(
      (field) => field.id === newFieldValue.id
    );
    newFields[fieldIndex] = newFieldValue;

    handleChannelChange(id, {
      ...channel,
      budgetBreakdown: newFields,
    });

    return () => setNewFieldValue({});
  }, [newFieldValue, budgetAllocation]);

  // Update baseline budget if Manual on
  useEffect(() => {
    if (budgetAllocation === "Equal") return;

    let newBaselineBudget = 0;

    budgetBreakdown.map((field) => {
      newBaselineBudget += parseFloat(parseFloat(field.sum).toFixed(2));
    });

    setBaselineBudget(newBaselineBudget);
  }, [budgetBreakdown]);

  // Update division by - budget frequency
  useEffect(() => {
    if (budgetAllocation === "Manual") return;

    if (budgetFrequency === "Annually") {
      setDivideBy(budgetBreakdown.length);
    } else if (budgetFrequency === "Monthly") {
      setDivideBy(budgetBreakdown.length / 12);
    } else if (budgetFrequency === "Quarterly") {
      setDivideBy(budgetBreakdown.length / 4);
    }
  }, [budgetFrequency, budgetAllocation]);

  // Update baseline budget if Equal on
  useEffect(() => {
    if (budgetAllocation === "Manual") return;

    handleChannelChange(id, {
      ...channel,
      baselineBudget,
    });

    setDividedBudget(parseFloat(baselineBudget / divideBy).toFixed(2));
  }, [baselineBudget, divideBy]);

  // Update breakdown fields
  useEffect(() => {
    if (budgetAllocation === "Manual") return;

    const budgetBreakdownFields = [];

    budgetBreakdown.map((field) =>
      budgetBreakdownFields.push({ ...field, sum: dividedBudget })
    );

    handleChannelChange(id, {
      ...channel,
      budgetBreakdown: budgetBreakdownFields,
    });
  }, [dividedBudget, divideBy]);

  return (
    <div className="channel-content">
      <div className="budget-options">
        <BudgetFrequency channel={channel} />
        <BaselineBudget
          budgetAllocation={budgetAllocation}
          budgetFrequency={budgetFrequency}
          baselineBudget={baselineBudget}
          setBaselineBudget={setBaselineBudget}
        />
        <BudgetAllocation channel={channel} />
      </div>
      <BudgetBreakdown channel={channel} setNewFieldValue={setNewFieldValue} />
    </div>
  );
};

export default ChannelContent;
