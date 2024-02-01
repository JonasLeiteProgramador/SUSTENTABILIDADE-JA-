let btn = document.getElementById('btn')

let searchForTips = async () => {
    try {
        const tips = document.getElementById('tips')
        const response = await fetch('http://localhost:4040/dicas-Ja');
        const data = await response.json();
        console.log(data)
        tips.innerHTML = `<div class="tips"><h1> Dica : ${data.titulo}</h1><br> <p>  ${data.descricao}</p> <br> <p> ${data.conteudo}</p></div>`;


    } catch (er) {

        console.log('Não foi possivel ralizar a busca na API local',er)
    }


}


btn.addEventListener('click', searchForTips);




