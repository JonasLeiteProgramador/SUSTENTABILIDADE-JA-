
let btn = document.getElementById('btn')

let generateGraph = async () => {
  try {

    const response = await fetch('http://localhost:4040/dados');
    const allData = await response.json(); 

    const ctx = document.getElementById('mygraph').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: allData.map(data => data.year),
        datasets: [{
          label: 'Desmatamento por area KM total no Brasil',
          data: allData.map(data => data.areakm),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(240, 248, 255, 1)',
          borderWidth: 2  
        }]
      },
      options: {  
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeOutQuad',
            from: 1.5,
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