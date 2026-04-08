function startCountdown(durationInSeconds) {
    const displayDays = document.getElementById('days');
    const displayHours = document.getElementById('hours');
    const displayMinutes = document.getElementById('minutes');
    const displaySeconds = document.getElementById('seconds');

    let timer = durationInSeconds;

    setInterval(() => {
        let days = Math.floor(timer / (3600 * 24));
        let hours = Math.floor((timer % (3600 * 24)) / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = Math.floor(timer % 60);

        displayDays.textContent = String(days).padStart(2, '0');
        displayHours.textContent = String(hours).padStart(2, '0');
        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');

        if (--timer < 0) timer = 0;
    }, 1000);
}

startCountdown(343196);

const track = document.getElementById('slider-track');
const nextBtn = document.querySelector('.arrow:last-child');
const prevBtn = document.querySelector('.arrow:first-child');

function startPromoTimer() {
    const countDownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("p-days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("p-hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("p-minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("p-seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // Если время вышло
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}


startPromoTimer();


const overlay = document.querySelector('.modal-overlay');
const btnOpen = document.querySelector('.btn-all');
const btnClose = document.querySelector('.btn-close');

// Функция-переключатель
const toggleModal = () => {
  overlay.classList.toggle('active');
};

btnOpen.onclick = toggleModal;
btnClose.onclick = toggleModal;


overlay.onclick = (e) => {
  if (e.target === overlay) toggleModal();
};

const mouseimg1 = document.querySelector('.promo__img')

mouseimg1.onmousemove = (e) => {
  const { width, height, left, top } = mouseimg1.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  const rotateX = -mouseY / 15; 
  const rotateY = mouseX / 15;

  mouseimg1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

