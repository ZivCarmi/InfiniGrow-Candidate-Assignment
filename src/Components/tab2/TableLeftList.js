import { useContext } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import ChannelLeftCol from "./ChannelLeftCol";
import "./TableLeftList.css";

const TableLeftList = () => {
  const { channels } = useContext(ChannelsContext);

  return (
    <div className="channels-list">
      <div className="heading">
        <div className="label">CHANNEL</div>
        <div className="gradient-seperator"></div>
      </div>
      <ul className="channel-left-col-list">
        {channels.map(({ title, image }, key) => {
          return <ChannelLeftCol title={title} image={image} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default TableLeftList;
