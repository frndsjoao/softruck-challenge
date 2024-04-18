<h3 align="center">
  Softruck challenge
</h3>

<p align="center">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/frndsjoao/softruck-challenge?color=%0652BD65">
  <a href="https://www.linkedin.com/in/frnds-joao/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-João%20Pedro%20A.-%2315C465">
  </a>
</p>

<p align="center">
  
## 📄 Sobre o projeto

O desafio consiste em criar um aplicativo mobile, em React Native, com um mapa que fará a animação da imagem de um veículo baseada na direção do carro.


## 💻 Techs

Tecnologias que escolhi para o desenvolvimento do app:

<p>
  <a href="https://ui.gorhom.dev/">@gorhom/bottom-sheet</a>: Para utilização do componente Bottom Sheet na tela do mapa; </br>
  <a href="https://www.expo.dev/">Expo</a>: Pela facilidade de configuração inicial do ambiente do projeto e melhorias de performance; </br>
  <a href="http://i18njs.com/">i18n-js</a>: Para possibilidar a internacionalização do projeto (En, Pt-br, Es); </br>
  <a href="https://www.typescriptlang.org/">Typescript</a>: Para fins de tipagem de dados e melhoria de código; </br>
  <a href="https://reactnavigation.org/">React Navigation</a>: Para realizar a navegação entre telas; </br>
  <a href="https://github.com/react-native-maps/react-native-maps">React Native Maps</a>: Para utilização do mapa (indicação da Softruck); </br>
  <a href="https://github.com/bramus/react-native-maps-directions">React Native Maps Directions</a>: Para renderização do trajeto das rotas no mapa; </br>
  <a href="https://styled-components.com/">Styled Components</a>: Para estilização. Optei por essa lib devido ao maior domínio que possuo em utilizá-la; </br>


## 💻 Iniciando o projeto
**Clone o projeto e acesse a pasta**

```bash
#
$ git clone https://github.com/frndsjoao/softruck-challenge.git && cd softruck-challenge
```

**Adicione uma Google Maps API Key**

```bash
# Na raíz do projeto, inclua a sua Google Maps API Key no arquivo .env, conforme exemplo:
#
#EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=123ASD456...
```

**Instale as dependências e execute o projeto**

```bash
# Instale as dependências:
$ yarn

# Execute o projeto:
$ npx expo start

# O projeto pode ser acessado usando um emulador Android ou iOS.
#
# Também é possível acessar o projeto utilizando seu próprio celular.
# Para isso é necessário ter o app Expo Go instalado no dispositivo e estar na mesma rede Wifi.
```

## Processo de desenvolvimento:
<p>
  1) Inicialização do repositório e configuração do Expo utilizando Typescript; </br>
  2) Inclusão do React Navigation, criação das rotas e configuração do tema pelo Styled Components. Nessa parte, as rotas foram planejadas em um papel mesmo, e o tema utilizado foi baseado no site da Softruck, utilizando os mesmos padrões de cores; </br>
  3) Desenvolvimento de telas e componentes: Como as rotas já haviam sido planejadas, foi possível desenvolver as telas baseado no que cada tela deveria possuir. Os componentes foram criados baseado na possibilidade de reutilização de código, evitando a repetição e facilitando a manutenção; </br>
  4) Após todas as telas terem sido desenvolvidas, iniciei o processo de integração com o React Native Maps e React Native Maps Directions. Nessa parte, foi necessário realizar um cálculo matemático para que o sprite do veículo ficasse alinhado com a direção via arquivo JSON. Se a direção fosse entre 0 e 45 graus, o veículo seria apontado para o norte, e assim por diante; </br>
  5) Inclusão do i18n para internacionalização dos textos apresentados no aplicativo;
</p>

## Sugestões:
<p>
  1) A "API" retornar um array de veículos. A mesma pessoa pode cadastrar mais de um veículo para rastreamento (no caso de possuir uma frota, por exemplo). Dessa forma, as rotas seriam buscadas pela placa do veículo.
</p>
