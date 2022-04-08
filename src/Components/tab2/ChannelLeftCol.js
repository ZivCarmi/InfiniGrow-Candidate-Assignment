import "./ChannelLeftCol.css";

const ChannelLeftCol = ({ title, image }) => {
  return (
    <div className="channel-left-col">
      <div className="channel-info-wrapper">
        <div className="channel-info">
          <img src={image} alt={title} className="channel-icon" />
          <div className="channel-title">{title}</div>
        </div>
      </div>
      <div className="gradient-seperator"></div>
    </div>
  );
};

export default ChannelLeftCol;
