const selector = document.querySelector('input[type="range"]');
const formula = document.querySelector('.card__options__checkbox');

const rangeValue = () => {
  let displayedPrice =  "";
  let displayedTraffic =  "";
  switch(selector.value) {
    case "0":
      displayedPrice =  "8.00";
      displayedTraffic =  "10k";
    break;
    case "1":
      displayedPrice =  "12.00";
      displayedTraffic =  "50k";
    break;
    case "2":
      displayedPrice =  "16.00";
      displayedTraffic =  "100k";
    break;
    case "3":
      displayedPrice =  "24.00";
      displayedTraffic =  "500k";
    break;
    case "4":
      displayedPrice =  "36.00";
      displayedTraffic =  "1M";
    break;
    default:
    console.log("out of range");
  };

  if(formula.checked) displayedPrice = (Number(displayedPrice) * 0.75) + ".00";

  const pricing = document.querySelector('.card__pricing__price__sum__count');
  pricing.innerHTML = displayedPrice;

  const traffic = document.querySelector('.card__pricing__pageviews__traffic');
  traffic.innerHTML = displayedTraffic;
}

selector.addEventListener("input", rangeValue);
formula.addEventListener("input", rangeValue);
