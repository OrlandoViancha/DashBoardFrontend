import PropTypes  from "prop-types";
import "./chartGraphicLine.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export function ChartGraphicLine({title,data}) {
 
 return (
  <div className="GraphicLine">
     <h3>{title}</h3>
     <div className="chart">
     <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="MES_PEDIDO" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CANTIDAD_PEDIDOS" stroke="#8884d8" />
          
        </LineChart>
      </ResponsiveContainer>
     </div>
  </div> );
}

ChartGraphicLine.propTypes = {
 title: PropTypes.string,
 data: PropTypes.array
}