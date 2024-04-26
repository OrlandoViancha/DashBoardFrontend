import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import "./chartHGraphicBar.css"

const CustomXAxisTick = ({ x, y, payload } ) => {
  const maxLength = 15;
  const lines = payload.value.length > maxLength ? payload.value.match(new RegExp(`.{1,${maxLength}}`, 'g')) : [payload.value];
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text key={index} x={0} y={index * 15} dy={16} textAnchor="middle" fill="#666">{line}</text>
      ))}
    </g>
  );
};

export function ChartHGraphicBar({ title, xaxis, yaxis, data }) {
  return (
  <div className="GraphicBar">
    <h3>{title}</h3>
    <div className="chart">
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width="100%"
          height="30%"
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
            
        >
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xaxis} interval={0} tick={<CustomXAxisTick/>} />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey={yaxis} fill="#8884d8" barSize={100} activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    </ResponsiveContainer>
    </div>
   
  </div>
  );
}

ChartHGraphicBar.propTypes = {
  title: PropTypes.string,
  xaxis: PropTypes.string,
  yaxis: PropTypes.string,
  data: PropTypes.array
}

CustomXAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.number,
}