// Darkmode
const dark = () => {
  const body = document.querySelector('body');
  const hours = moment().hour();

  hours < 6 || hours > 18
    ? (body.style.backgroundImage =
        'linear-gradient(60deg, #29323c 0%, #485563 100%)')
    : (body.style.backgroundImage =
        'linear-gradient(120deg, #f6d365 0%, #fda085 100%)');
}

export default {
  dark
}
