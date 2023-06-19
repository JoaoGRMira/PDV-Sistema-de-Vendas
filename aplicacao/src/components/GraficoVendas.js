import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoVendas() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      marginTop: 10,
      width: 270,
      height: 270
    },
    title: {
      text: 'Gráfico de vendas',
      align: 'center'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: ''
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}'
        }
      }
    },
    series: [{
      name: 'Produto',
      colorByPoint: true,
      data: [{
        name: 'Caneta',
        y: 70,
        sliced: true,
        selected: true
      }, {
        name: 'Chave',
        y: 14
      }, {
        name: 'Meia',
        y: 4
      }, {
        name: 'Vela',
        y: 2
      }, {
        name: 'Copo',
        y: 1
      }]
    }]
  };

  return (    
    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
