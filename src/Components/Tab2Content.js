import { useContext, useEffect } from "react";
import { ChannelsContext } from "../context/ChannelsContext";
import ChannelLeftCol from "./ChannelLeftCol";
import ChannelRightCol from "./ChannelRightCol";
import "./ChannelTable.css";

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

  const swipeNav = (e) => {
    const tableContainer = document.querySelector(".table-container");
    const table = document.querySelector(".table-container table");

    if (e.target.classList.contains("left")) {
      tableContainer.scrollLeft -= table.clientWidth / 12;
    } else {
      tableContainer.scrollLeft += table.clientWidth / 12;
    }
  };

  return (
    <div className="channels-table">
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
      <div className="table-container">
        <div className="table-nav">
          <button
            type="button"
            className="left arrow"
            onClick={swipeNav}
          ></button>
          <button
            type="button"
            className="right arrow"
            onClick={swipeNav}
          ></button>
        </div>
        <table>
          <thead>
            <tr className="channel-right-col">
              {channels[0].budgetBreakdown.map(({ month }) => (
                <th key={month}>{month} 21</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {channels.map((channel) => {
              return (
                <tr className="channel-fields" key={channel.id}>
                  <ChannelRightCol channel={channel} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab2Content;
