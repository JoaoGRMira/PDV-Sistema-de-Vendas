import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoTotal() {
  const options = {
    chart: {
      backgroundColor: 'transparent'
    },
    title: {
      text: 'Total de Vendas nos Últimos 5 Anos'
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
      title: {
        text: 'Quantidade'
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br />',
      pointFormat: 'Ano: {point.category}, Quantidade: {point.y}'
    },
    series: [
      {
        name: 'Caneta',
        data: [120, 180, 220, 300, 250]
      },
      {
        name: 'Copo',
        data: [80, 150, 190, 280, 220]
      },
      {
        name: 'Meia',
        data: [200, 250, 180, 320, 270]
      },
      {
        name: 'Chave',
        data: [180, 300, 270, 180, 320]
      },
      {
        name: 'Vela',
        data: [ 320, 270, 300, 180, 180]
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
