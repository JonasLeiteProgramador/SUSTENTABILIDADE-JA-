const sustainabilityTips = [
  {
    titulo: "Recicle seu lixo",
    descricao: "Separe materiais recicláveis do lixo comum e contribua para a redução de resíduos.",
    conteudo: "Certifique-se de separar itens como papel, plástico, vidro e metal para a coleta seletiva. Isso facilita o processo de reciclagem e evita o acúmulo de resíduos no meio ambiente."
  },
  {
    titulo: "Economize água",
    descricao: "Adote práticas para reduzir o consumo de água no seu dia a dia.",
    conteudo: "Feche as torneiras enquanto escova os dentes, conserte vazamentos, utilize a máquina de lavar roupa e louça com a capacidade total, e aproveite a água da chuva para regar plantas."
  },
  {
    titulo: "Use transporte público",
    descricao: "Opte por usar transporte público, carona solidária ou bicicleta para reduzir a emissão de poluentes.",
    conteudo: "Além de ser uma opção mais sustentável, usar transporte público ou compartilhar caronas ajuda a diminuir a poluição do ar e o congestionamento nas ruas."
  },
  {
    titulo: "Reduza o consumo de carne",
    descricao: "Diminua o consumo de carne para reduzir a pegada de carbono.",
    conteudo: "A produção de carne tem um grande impacto ambiental. Tente incorporar mais refeições vegetarianas ou veganas na sua dieta para ajudar a diminuir a pressão sobre os recursos naturais."
  },
  {
    titulo: "Plante árvores",
    descricao: "Contribua para o reflorestamento plantando árvores em áreas necessitadas.",
    conteudo: "As árvores desempenham um papel crucial na absorção de dióxido de carbono e na produção de oxigênio. Participe de projetos de plantio de árvores em sua comunidade."
  },
  {
    titulo: "Use energia renovável",
    descricao: "Adote fontes de energia renovável em sua casa e local de trabalho.",
    conteudo: "Considere a instalação de painéis solares, turbinas eólicas ou outras fontes de energia limpa para reduzir a dependência de combustíveis fósseis e diminuir a emissão de gases de efeito estufa."
  },
  {
    titulo: "Evite produtos descartáveis",
    descricao: "Opte por produtos reutilizáveis em vez de descartáveis.",
    conteudo: "Itens descartáveis, como copos, talheres e sacolas plásticas, contribuem para a poluição. Escolha alternativas reutilizáveis para reduzir a quantidade de resíduos gerados."
  },
  {
    titulo: "Apoie produtos locais",
    descricao: "Prefira comprar produtos locais para reduzir a pegada de carbono.",
    conteudo: "Ao comprar alimentos e produtos locais, você apoia a economia local e ajuda a reduzir as emissões associadas ao transporte de mercadorias de longa distância."
  },
  {
    titulo: "Desconecte aparelhos eletrônicos",
    descricao: "Desconecte aparelhos eletrônicos quando não estiverem em uso.",
    conteudo: "A maioria dos aparelhos consome energia mesmo quando estão desligados. Desconecte-os da tomada para economizar energia e reduzir os custos de eletricidade."
  },
  {
    titulo: "Promova a conscientização",
    descricao: "Compartilhe informações sobre sustentabilidade com amigos, familiares e colegas.",
    conteudo: "A conscientização é fundamental para promover mudanças. Compartilhe dicas e informações sobre sustentabilidade para inspirar outras pessoas a adotarem práticas mais sustentáveis."
  },
  {
    titulo: "Participe de iniciativas voluntárias",
    descricao: "Envolva-se em projetos voluntários relacionados à sustentabilidade.",
    conteudo: "Participar de iniciativas voluntárias, como limpezas de praia ou plantio de árvores, é uma maneira prática de contribuir para o meio ambiente e a comunidade."
  },
  {
    titulo: "Repense o consumo",
    descricao: "Reflita sobre suas escolhas de consumo e evite compras desnecessárias.",
    conteudo: "Antes de comprar algo, questione se você realmente precisa. Priorize produtos duráveis e de alta qualidade para reduzir o descarte precoce de itens."
  },
  {
    titulo: "Use sacolas reutilizáveis",
    descricao: "Substitua sacolas plásticas por sacolas reutilizáveis.",
    conteudo: "Carregue sempre consigo sacolas reutilizáveis para evitar o uso de sacolas plásticas descartáveis, que são prejudiciais ao meio ambiente."
  },
  {
    titulo: "Eduque sobre sustentabilidade",
    descricao: "Inclua a educação ambiental em escolas e comunidades.",
    conteudo: "Promova a educação ambiental para crianças e adultos, destacando a importância da sustentabilidade e incentivando práticas conscientes."
  },
  {
    titulo: "Compre produtos eco-friendly",
    descricao: "Opte por produtos que tenham menor impacto ambiental.",
    conteudo: "Escolha produtos fabricados com materiais sustentáveis, recicláveis e de empresas que adotam práticas eco-friendly em sua produção."
  },
  {
    titulo: "Economize energia em casa",
    descricao: "Adote medidas para reduzir o consumo de energia em sua residência.",
    conteudo: "Troque lâmpadas incandescentes por LED, desligue aparelhos eletrônicos, e utilize eletrodomésticos eficientes para economizar energia em casa."
  },
  {
    titulo: "Reduza o uso de plástico",
    descricao: "Minimize o uso de produtos plásticos em seu cotidiano.",
    conteudo: "Evite utensílios de plástico descartáveis, escolha embalagens sustentáveis e busque alternativas para reduzir o impacto do plástico no meio ambiente."
  },
  {
    titulo: "Aproveite a luz natural",
    descricao: "Aproveite a luz natural durante o dia para reduzir o consumo de eletricidade.",
    conteudo: "Abra cortinas e persianas durante o dia para aproveitar a luz do sol, reduzindo assim a necessidade de iluminação artificial."
  },
  {
    titulo: "Desenvolva uma horta",
    descricao: "Cultive seus próprios alimentos em uma horta em casa.",
    conteudo: "Além de proporcionar alimentos frescos, cultivar uma horta em casa é uma prática sustentável que reduz a dependência de produtos agrícolas industrializados."
  }
];


let generateRandomTip = () => {
  const randomTip = sustainabilityTips[Math.floor(Math.random() * sustainabilityTips.length)];
  return randomTip;
}

let getAllTheTips = () => {
  return sustainabilityTips;
}


export { generateRandomTip, getAllTheTips }