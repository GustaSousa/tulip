# Tulip 🌷

**Tulip** é uma página HTML interativa que exibe uma mensagem especial com uma galeria de fotos que muda automaticamente e um cronômetro que conta o tempo em meses, dias, horas, minutos e segundos até uma data específica.

## Funcionalidades

- **Exibição de Imagem Aleatória**: Um conjunto de imagens é exibido de forma aleatória a cada 5 segundos, mantendo a página dinâmica e visualmente atraente.
- **Cronômetro**: O cronômetro exibe o tempo decorrido desde uma data predefinida, em uma contagem que inclui meses, dias, horas, minutos e segundos.
- **Mensagem Personalizada**: Um parágrafo exibe uma mensagem dedicada a alguém especial, tornando a página mais pessoal.

## Estrutura do Projeto

- `index.html`: Estrutura HTML principal, contendo o layout da página e os links para o CSS e JavaScript.
- `style.css`: Estilos para o layout, incluindo o design da galeria de fotos, a mensagem e o cronômetro.
- `script.js`: Funções JavaScript para o funcionamento da galeria de fotos e do cronômetro.

## Pré-requisitos

Para rodar o projeto, você precisa de um navegador que suporte JavaScript e HTML5.

## Configuração

1. Clone o repositório para o seu ambiente local.
    ```bash
    git clone https://github.com/seu-usuario/tulip.git
    ```
2. Certifique-se de ter as imagens no diretório `images` e nomeadas conforme o array de URLs no `script.js`. Exemplo:
    ```
    tulip/
    ├── images/
    │   ├── 1.HEIC
    │   ├── 1.jpg
    │   ├── 2.jpeg
    │   ├── 3.jpeg
    │   └── 4.jpeg
    ├── index.html
    ├── style.css
    └── script.js
    ```

## Uso

1. Abra o `index.html` no navegador.
2. A página exibirá uma foto aleatória na galeria e mudará a imagem a cada 5 segundos.
3. O cronômetro exibirá o tempo decorrido desde a data alvo, sendo atualizado a cada segundo.

## Personalização

- **Alterar as Imagens**: Adicione ou substitua imagens no array `images` em `script.js` com os URLs das imagens desejadas.
- **Data do Cronômetro**: Modifique a variável `targetDate` no `script.js` para ajustar a data que deseja contar.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Licença

Esse projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> 🌷 *Para: a tulipa que coloriu meu jardim.* 🌷