import { useState, useContext, useEffect } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import "./ChannelHeadline.css";

const ChannelHeadline = ({
  channel,
  isEdit,
  setIsEdit,
  newTitle,
  setNewTitle,
  setIsFinishedEdit,
  setChannelToRemove,
}) => {
  const { id, title, image } = channel;
  const { openChannel, setOpenChannel } = useContext(ChannelsContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Open/close channel content
  const toggleChannelVisibility = (id) =>
    setOpenChannel(openChannel === id ? "" : id);

  const setDropdownEvent = () => setIsDropdownOpen(false);

  // Display/hide dropdown
  const handleDropdown = (e) => {
    if (!isDropdownOpen) window.addEventListener("click", setDropdownEvent);

    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Clean dropdown event
  useEffect(() => {
    return () => window.removeEventListener("click", setDropdownEvent);
  }, []);

  // Start edit
  const handleEditBtn = () => setIsEdit(true);

  // Prevent channel toggle
  const handleEditInputClick = (e) => e.stopPropagation();

  // Set new title
  const handleEditChange = (e) => setNewTitle(e.target.value);

  // On save edit click
  const handleFinishEdit = (e) => {
    // Prevent channel toggle
    e.stopPropagation();

    setIsFinishedEdit(true);
  };

  // On cancel edit click
  const handleCancelEdit = (e) => {
    // Prevent channel toggle
    e.stopPropagation();

    setIsEdit(false);
  };

  // On remove channel click
  const handleRemoveBtn = () => setChannelToRemove(id);

  return (
    <div className="channel-headline">
      <div
        className="toggle-channel-btn"
        onClick={() => toggleChannelVisibility(id)}
      >
        <div className="arrow"></div>
        <div className="channel-info">
          <img className="channel-icon" src={image} alt={title} />
          {isEdit ? (
            <>
              <input
                autoFocus
                type="text"
                className="radiused-light"
                id="edit-channel-title"
                value={newTitle}
                onChange={handleEditChange}
                onClick={handleEditInputClick}
              />
              <button
                type="button"
                className="checkmark"
                onClick={handleFinishEdit}
              ></button>
              <button className="x-icon" onClick={handleCancelEdit}></button>
            </>
          ) : (
            <div className="channel-title">{title}</div>
          )}
        </div>
      </div>
      <div className="channel-actions flyout-parent">
        <button type="button" id="channel-actions-btn" onClick={handleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isDropdownOpen && (
          <div className="nav-flyout">
            <button type="button" id="edit-channel-btn" onClick={handleEditBtn}>
              Edit
            </button>
            <button
              type="button"
              id="remove-channel-btn"
              onClick={handleRemoveBtn}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelHeadline;
