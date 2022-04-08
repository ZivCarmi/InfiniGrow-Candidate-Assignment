import { useContext } from "react";
import { ChannelsContext } from "../context/ChannelsContext";
import Channel from "./Channel";

const Tab1Content = () => {
  const { channels } = useContext(ChannelsContext);

  return (
    <div className="channels-row">
      {channels.map((channel) => {
        return <Channel channel={channel} key={channel.id} />;
      })}
    </div>
  );
};

export default Tab1Content;
