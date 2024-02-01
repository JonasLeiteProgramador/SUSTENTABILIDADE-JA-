
let btn = document.getElementById('btn')

let generateGraph = async () => {
  try {

    const response = await fetch('http://localhost:4040/maior-desmatamento-estado');
    const allData = await response.json(); 
    console.log(allData)

    const ctx = document.getElementById('mygraph').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: allData.map(data => `${data.year} - ${data.uf}`),
        datasets: [{
          label: 'Maior desmatamento por estado de area KM total no Brasil',
          data: allData.map(data => data.areakm),
          fill: false,
          backgroundColor: '#fffff0',
          borderColor: '#7fff00',
          borderWidth: 2,
          tension: 0.1
        }]
      },
      options: {  
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeOutQuad',
            from: 2,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } catch (er) {
    console.log("Erro ao gerar o gráfico", er)
  }
}

  btn.addEventListener('click',()=>{
    document.getElementById('mygraph').classList.add('show')
  
    generateGraph()

  })