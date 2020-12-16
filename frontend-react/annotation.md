-> Babel: Converte (transpila) o codigo do React para um codígo que
o Brower entenda.

-> Webpack: Para cada tipo de arquivo (.js, .css, .png), vai converter
o código de uma maneira diferente.

-> Loaders: babel-loader, css-loader, image-loader...(o que tiver
"loader" no final, vai ajudar o Webpack na converção)

## |> JSX: HTML dentro do Javascript (Javascript XML)

## => A utilização de fragment "<>" "</>"

serve para envolver mais de um elemento sem precisar
criar uma div

# ||> 3 conceitos do React:

|-> Componentes: Dividir partes da sua aplicação

|-> Propriedade: como os parametros ! (pode usar desestruturação)

-> props = propriedades
<Exemplo1 title="exemplo2">

function(props) ou ({exemplo2}) = desestruturado

-> children = conteudo que é passado
<Exemplo1>

  <ul>
    <li>Exemplo2</li>
  </ul>

</Exemplo1>

function(children) = voce vai acessar o conteudo do componente

|-> Estado

- useState() retorna um array com 2 posições
-
- 1.  Variável com o seu valor inicial
- 2.  Função para atualizarmos esse valor
