import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoVendedor() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 270,
      height: 270
    },
    title: {
      text: 'Porcentagem<br>por vendedor',
      align: 'center',
      verticalAlign: 'middle',
      y: 60,
      style: {
        fontSize: '12px' // Tamanho da fonte do título
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: '10px' // Tamanho da fonte dos rótulos dos dados
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Porcentagem',
      innerSize: '50%',
      data: [
        ['Isabel', 30],
        ['André', 25],
        ['Victor', 15],
        ['Nicholas', 20],
        ['Elisa', 10]
      ]
    }]
  };

  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden', width: '270px', height: '270px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
