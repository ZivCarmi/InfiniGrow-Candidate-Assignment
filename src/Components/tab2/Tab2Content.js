import { useContext, useEffect } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import TableLeftList from "./TableLeftList";
import TableRightList from "./TableRightList";
import "./Tab2Content.css";

const Tab2Content = () => {
  const { channels } = useContext(ChannelsContext);

  // Adjust table height
  useEffect(() => {
    const channelInfos = document.querySelectorAll(".channel-left-col");
    const channelFields = document.querySelectorAll(".channel-fields");

    channelInfos.forEach((el, index) => {
      channelFields[index].style.height = `${el.offsetHeight}px`;
    });
  });

  return (
    <div className="channels-table">
      <TableLeftList channels={channels} />
      <TableRightList channels={channels} />
    </div>
  );
};

export default Tab2Content;
