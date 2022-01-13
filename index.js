import "regenerator-runtime/runtime"
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-project-0-eepsa',
});

const chart = sdk.createChart({
  chartId: 'fec6a482-ce12-4e14-8d4f-3b38ed9f9901',height:"720px",

});
chart

  .render(document.getElementById('chart'))
  .catch(() => console.log('Chart failed to initialise'));

document.getElementById('date-from').addEventListener('change',e=>{
  const date=new Date(e.target.value);
  chart.setFilter({timestamp:{$gte:date}});
  
});




