import { useState, useContext, useEffect } from "react";
import { ChannelsContext } from "../context/ChannelsContext";
import ChannelHeadline from "./ChannelHeadline";
import ChannelContent from "./ChannelContent";
import "./Channel.css";

const Channel = ({ channel }) => {
  const { openChannel } = useContext(ChannelsContext);
  const { handleChannelChange, handleChannelRemove } =
    useContext(ChannelsContext);
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(channel.title);
  const [isFinishedEdit, setIsFinishedEdit] = useState(false);
  const [channelToRemove, setChannelToRemove] = useState("");

  useEffect(() => {
    if (!isFinishedEdit) return;

    handleChannelChange(channel.id, {
      ...channel,
      title: newTitle,
    });

    setIsEdit(false);
    setIsFinishedEdit(false);
  }, [isFinishedEdit]);

  useEffect(() => {
    if (!channelToRemove) return;

    handleChannelRemove(channelToRemove);

    setChannelToRemove("");
  }, [channelToRemove]);

  return (
    <div
      className={`channel-box${openChannel === channel.id ? " active" : ""}`}
    >
      <ChannelHeadline
        channel={channel}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        setIsFinishedEdit={setIsFinishedEdit}
        setChannelToRemove={setChannelToRemove}
      />
      {openChannel === channel.id && <ChannelContent channel={channel} />}
    </div>
  );
};

export default Channel;
