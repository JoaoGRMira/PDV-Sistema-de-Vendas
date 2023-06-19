import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoAnual() {
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Consumo Anual por Região'
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022', '2023'],
      title: {
        text: 'Ano'
      }
    },
    yAxis: {
      title: {
        text: 'Consumo'
      }
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      formatter: function () {
        let tooltip = `<strong>Ano: ${this.x}</strong><br/>`;
        this.points.forEach(point => {
          tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${point.y}</b><br/>`;
        });
        return tooltip;
      }
    },
    series: [
      {
        name: 'São Paulo',
        data: [120, 180, 220, 300, 250],
        zIndex: 2 // Série Região A
      },
      {
        name: 'Bahia',
        data: [80, 150, 190, 280, 220],
        zIndex: 2 // Série Região B
      },
      {
        name: 'Rio de Janeiro',
        data: [200, 250, 180, 320, 270],
        zIndex: 1 // Série Região C (atrás das outras séries)
      }
    ]
  };

  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden'}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
