import { BarList } from '@tremor/react';
import PropTypes from "prop-types";
import "./chartVGraphicBar.css";

const datahero = [
  { name: '/home', value: 456 },
  { name: '/imprint', value: 351 },
  { name: '/cancellation', value: 51 },
];
export function ChartVGraphicBar({ title }) {
  
  return (
  <div className="GraphicVBar">
      <h3>{title}</h3>
      
    <div className="chart">
    <BarList
      data={datahero}
      sortOrder="ascending"
      className="mx-auto max-w-sm"
    />
    </div>
  </div>
  );
}

ChartVGraphicBar.propTypes = {
  title: PropTypes.string,
  xaxis: PropTypes.string,
  yaxis: PropTypes.string,
  data: PropTypes.array
}