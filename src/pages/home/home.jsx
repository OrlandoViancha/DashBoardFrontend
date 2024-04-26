import { useEffect, useState } from "react";
import { ChartListTops } from "../../components/chartListTops/chartListTops"
import { ChartTopBox } from "../../components/chartTopBox/chartTopBox"
import "./home.css"
import Axios from "axios";
import { ChartGraphicLine } from "../../components/chartGraphicLine/chartGraphicLine";
import { ChartGraphicPie } from "../../components/chartGraphicPie/chartGraphicPie";
import { ChartHGraphicBar } from "../../components/chartHGraphicBar/chartHGraphicBar";
//import { ChartVGraphicBar } from "../../components/chartVGraphicBar/chartVGraphicBar";
export function Home() {
 
  const [data, setData] = useState([]);

  useEffect(() => {

  
    Axios.get('http://localhost:3001/queries').then((result) => {
      setData(result.data);
    }).catch((err) => {
      console.log(err);
    });

  }, [])

  if (!data || !data.length || !data[0].result) {
    return <div>No hay datos disponibles.</div>;
  }
 
  return (
  <>
    {
      < div className = "home" >
        <div className="box">
          <div className="box-top">
            <div className="box box-top_element">
                <ChartTopBox title="Prod. Vendidos" linkImage="/product.svg" amount={ data[0].result[0].PRODUCTOS_VENDIDOS } />
            </div>
            <div className="box box-top_element">
                <ChartTopBox title="Total Pedidos" linkImage="/user.svg" amount={data[1].result[0].TOTAL_PEDIDOS} />
            </div>
            <div className="box box-top_element">
              <ChartTopBox title="Pro. Ventas Año" linkImage="/order.svg" amount={data[2].result[0].PROM_PED_ANIO} />
            </div>
            <div className="box box-top_element">
              <ChartTopBox title="Total Ingresos" linkImage="/post2.svg" amount={data[3].result[0].TOTAL_INGRESOS}/>
            </div>
          </div>

          <div className="box-graphics">
            <div className="box-graphics_left">
              <div className="box box-graphics_left_element">
                <ChartListTops title ="Top 10 Productos mas Solicitados" data={data[4]} />
              </div>
              <div className="box box-graphics_left_element">
                <ChartHGraphicBar title="Cantidad de Pedidos por Año" xaxis= "ANIO_PEDIDO" yaxis ="CANTIDAD_PEDIDOS"data={data[8].result}/>
              </div>  
              
            </div>
            <div className="box-graphics_right">
              <div className="box box-graphics_right_element">
                <ChartListTops title ="Top 3 Clientes con mas Pedidos" data={data[5]} />  
              </div>
              <div className="box box-graphics_right_element">
                  <ChartGraphicLine title="Cantidad de Pedidos por Mes" data={data[6].result } />
              </div>
              <div className="box box-graphics_right_element">
                <ChartGraphicPie data={data[7].result} />
              </div>
              
            </div>
            
          </div>
          <div className="box-graphics_bottom">
            <div className="box box-graphics_bottom_element">
              <ChartHGraphicBar title="Top 5 Productos mas Vendidos" xaxis= "NAME" yaxis ="VALUE" data={data[9].result}/>  
            </div> 
            <div className="box box-graphics_bottom_element">
              <ChartHGraphicBar title="Top 4 Categorias que mas Venden" xaxis= "NOMBRE" yaxis ="CANTIDAD"data={data[10].result}/>  
            </div> 
          </div>

          
        </div>
        
      </div >
    }
  </>
 )
}