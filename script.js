// Array de URLs das suas imagens
const images = [
  "images/1.HEIC",
  "images/1.jpg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
];

// Função para alterar a imagem de forma aleatória
function changePhoto() {
  const photoBox = document.getElementById("photo-box");
  let photo = document.getElementById("current-photo");

  // Verifica se a imagem já existe, caso contrário cria uma nova
  if (!photo) {
    photo = document.createElement("img");
    photo.id = "current-photo";
    photo.alt = "Foto";
    photoBox.appendChild(photo);
  }

  // Define o src com uma imagem aleatória
  const randomIndex = Math.floor(Math.random() * images.length);
  photo.src = images[randomIndex];
}

// Mudar a foto a cada 5 segundos
setInterval(changePhoto, 5000);

// Iniciar com uma imagem aleatória
changePhoto();

// Função de cronômetro
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("2023-12-05T00:00:00");

  function updateCountdown() {
    const now = new Date();

    // Calcula a diferença em anos, meses e dias
    let yearDiff = now.getFullYear() - targetDate.getFullYear();
    let monthDiff = now.getMonth() - targetDate.getMonth();
    let dayDiff = now.getDate() - targetDate.getDate();

    // Ajusta meses e anos, se necessário
    if (dayDiff < 0) {
      monthDiff--;
      dayDiff += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    // Calcula horas, minutos e segundos restantes
    const hours = now.getHours() - targetDate.getHours();
    const minutes = now.getMinutes() - targetDate.getMinutes();
    const seconds = now.getSeconds() - targetDate.getSeconds();

    // Atualiza a exibição do cronômetro
    countdownElement.innerHTML = `${
      yearDiff * 12 + monthDiff
    } meses, ${dayDiff} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }

  // Atualiza o cronômetro a cada 1 segundo
  setInterval(updateCountdown, 1000);
}

// Iniciar cronômetro ao carregar a página
startCountdown();
