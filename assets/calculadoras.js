/* ============================================
   LISTA DE CALCULADORAS
   ============================================
   
   Para adicionar uma nova calculadora:
   
   1. Coloque o arquivo .html na pasta "calculadoras/"
   2. Adicione um item neste array com:
        - id:     identificador único (sem espaços, sem acentos)
        - nome:   texto que aparece no botão da sidebar
        - arquivo: nome do arquivo HTML dentro da pasta calculadoras/
        - descricao: (opcional) frase curta sobre a calculadora
   
   3. Salve e recarregue o site.
   
   Para remover: apague o item do array (ou comente com // no começo).
   ============================================ */

const CALCULADORAS = [
  {
    id: 'viga-flexao-cisalhamento',
    nome: 'Viga — Flexão e Cisalhamento',
    arquivo: 'calculadora_armadura_viga.html',
    descricao: 'Armadura longitudinal e transversal de vigas retangulares ou T conforme NBR 6118:2014.'
  },

  // === Adicione novas calculadoras abaixo ===
  // Exemplo:
  // {
  //   id: 'pilar-compressao-simples',
  //   nome: 'Pilar — Compressão simples',
  //   arquivo: 'calculadora_pilar.html',
  //   descricao: 'Dimensionamento de pilar de concreto armado com flexão composta.'
  // },
];
