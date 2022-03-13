import { React } from "react";
import { Calendar } from "antd";
import "./style.css";
import { dateCellRender, monthCellRender } from "./Components/AddEvent";

function App() {
  return (
    <div className="calender_container">
      <h1>SEELEE CALENDER APP </h1>
      <h3>To track our fking shit </h3>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}

export default App;
