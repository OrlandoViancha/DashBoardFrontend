import "./chartListTops.css"
import PropTypes from 'prop-types';
export function ChartListTops({title,data}) {
  
 return (
  <div className="chartListTop">
     <h3>{title}</h3>
     <div className="list">
     {data && data.result && data.result.map((item, index) => (
      <div className="listItem" key={index}>
        <div className="user">
          <div className="userTexts">
            <span className="username">{item.NOMBRE}</span>
          </div> 
        </div>
        <span className="amount">{item.CANTIDAD}</span>  
      </div> 
        ))}
    </div>
  </div>
 )
}

ChartListTops.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object
}