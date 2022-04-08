import { useState, useContext, useEffect } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import FieldColumn from "./FieldColumn";
import "./ChannelRightCol.css";

const ChannelRightCol = ({ channel }) => {
  const { id, budgetBreakdown } = channel;
  const { handleChannelChange } = useContext(ChannelsContext);
  const [newFieldValue, setNewFieldValue] = useState({});
  const [isFinishedEdit, setIsFinishedEdit] = useState(false);

  // Update budget breakdown fields
  useEffect(() => {
    if (!isFinishedEdit) return;

    // find the field we want to update
    const newFields = [...budgetBreakdown];
    const fieldIndex = newFields.findIndex(
      (field) => field.id === newFieldValue.id
    );
    newFields[fieldIndex] = newFieldValue;

    handleChannelChange(id, {
      ...channel,
      budgetAllocation: "Manual",
      budgetBreakdown: newFields,
    });

    setIsFinishedEdit(false);
    setNewFieldValue({});
  }, [newFieldValue]);

  return budgetBreakdown.map((field) => (
    <FieldColumn
      budgetBreakdown={field}
      setNewFieldValue={setNewFieldValue}
      key={field.month}
      setIsFinishedEdit={setIsFinishedEdit}
    />
  ));
};

export default ChannelRightCol;
