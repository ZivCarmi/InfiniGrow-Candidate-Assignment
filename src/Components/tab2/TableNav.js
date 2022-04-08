import "./TableNav.css";

const TableNav = () => {
  // Swipe table left/right
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
    <div className="table-nav">
      <button type="button" className="left arrow" onClick={swipeNav}></button>
      <button type="button" className="right arrow" onClick={swipeNav}></button>
    </div>
  );
};

export default TableNav;
