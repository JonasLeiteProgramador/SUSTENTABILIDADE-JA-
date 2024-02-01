    let btn = document.getElementById('btn');
    let tipsElement = document.getElementById('listTips');
    let loadedTips = 0;
    const tipPerPage = 5; 



    let loadingTips = async (quantity) => {
        try {
            const response = await fetch('http://localhost:4040/dicas');
            const allTips = await response.json();
            const TipsForLoading = allTips.slice(loadedTips, loadedTips + quantity);

            TipsForLoading.forEach(dica => {
                const li = document.createElement("li");
                li.innerHTML = `
                    
                    <h1>Dica: ${dica.titulo}</h1>
                    <p>${dica.descricao}</p>
                    <p>${dica.conteudo}</p>
                
                `;
                tipsElement.appendChild(li);
            });

            loadedDicas += quantity;

            
            if (loadedDicas >= allTips.length) {
                btn.style.display = 'none';
            }
        } catch (er) {
            console.log('Não foi possível realizar a busca na API local', er);
        }
    };

  
    btn.addEventListener('click', () => {
        loadingTips(tipPerPage);
    });

    
    loadingTips(tipPerPage);
