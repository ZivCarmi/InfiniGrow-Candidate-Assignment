import { useContext } from "react";
import { ChannelsContext } from "../../context/ChannelsContext";
import ChannelRightCol from "./ChannelRightCol";
import TableNav from "./TableNav";
import "./TableRightList.css";

const TableRightList = () => {
  const { channels } = useContext(ChannelsContext);

  return (
    <div className="table-container">
      <TableNav />
      <table>
        <thead>
          <tr>
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
  );
};

export default TableRightList;
