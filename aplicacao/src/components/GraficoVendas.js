import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoVendas() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Gráfico de vendas',
      align: 'center'
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
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Produto',
      colorByPoint: true,
      data: [{
        name: 'Produto',
        y: 70,
        sliced: true,
        selected: true
      }, {
        name: 'Produto',
        y: 14
      }, {
        name: 'Produto',
        y: 4
      }, {
        name: 'Produto',
        y: 2
      }, {
        name: 'Produto',
        y: 1
      }, {
        name: 'Produto',
        y: 1
      }, {
        name: 'Produto',
        y: 5
      }, {
        name: 'Produto',
        y: 15
      }, {
        name: 'Produto',
        y: 2
      }]
    }]
  };

  return (
    <div className="row">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="p-4">
          <h3 className="text-center" style={{ borderBottom: '3px solid #5925BF', paddingBottom: '2px' }}>
            Descrição do Gráfico
          </h3>
          <p className="text-center">
            Descrição do gráfico, como informações e dados, período e produtos em que foi baseado.
          </p>
          <div className="text-center">
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF", marginTop: "20px" }}>Mais Opções de Gráficos</button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="p-4">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}
