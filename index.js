const names = ["Alice", "Bob", "Carol", "David"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer"];
const maxFreelancers = 10;

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const addFreelancerIntervalId = setInterval(addRandomFreelancer, 5000);

render();

function render() {
  const freelancersList = document.querySelector("#freelancers-list");
  const averagePriceElement = document.querySelector("#average-price");

  freelancersList.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.price}`;
    freelancersList.appendChild(listItem);
  });

  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
}

function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;
  const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };
  freelancers.push(newFreelancer);

  render();

  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

function calculateAveragePrice() {
  const totalPrices = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
  return totalPrices / freelancers.length;
}

