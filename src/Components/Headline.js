import "./Headline.css";

const Headline = ({ handleAddChannel }) => {
  return (
    <div className="app-headline">
      <div className="texts">
        <h1 className="app-title">Build your budget plan</h1>
        <div className="app-description">
          <h2 className="description-title">Setup channels</h2>
          <div className="description">
            Setup your added channels by adding baseline budgets out of your
            total budget. See the forecast impact with the help of tips and
            insights.
          </div>
        </div>
      </div>
      <div className="app-actions">
        <button
          type="button"
          className="button"
          id="add-channel-btn"
          onClick={handleAddChannel}
        >
          <div className="plus-icon"></div> Add Channel
        </button>
      </div>
    </div>
  );
};

export default Headline;
