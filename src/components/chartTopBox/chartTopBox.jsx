import PropTypes from 'prop-types';
import './chartTopBox.css'
export function ChartTopBox({title,linkImage,amount}) {
 return (
  <div className="chartTopBox">
   <div className="iconChart">
    <div className="chart">
     <img src={linkImage} />
    </div>
   </div>
   <div className="boxInfo">
    <div className="title">
     <span>{title}</span>
     <h1>{amount}</h1>
    </div>
   </div>
  </div>
 )
}

ChartTopBox.propTypes = {
 title: PropTypes.string,
 linkImage: PropTypes.string,
 amount: PropTypes.number
}