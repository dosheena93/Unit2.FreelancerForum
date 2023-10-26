/* State */
const names = ["Alice", "Bob", "Carol", "David"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer"];
const maxFreelancers = 10;

const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
];

const addFreelancerIntervalId = setInterval(addRandomFreelancer, 5000);

render();

/**
 * Update the DOM to reflect the current state.
 */
function render() {
  const freelancersList = document.querySelector("#freelancers-list");
  const averagePriceElement = document.querySelector("#average-price");

  // Clear the existing list
  freelancersList.innerHTML = "";

  // Render the list of freelancers
  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.price}`;
    freelancersList.appendChild(listItem);
  });

  // Update the average starting price
  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
}

/**
 * Add a random freelancer to the `freelancers` array
 */
function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;
  const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };

  // Add the new freelancer to the array
  freelancers.push(newFreelancer);

  // Render the updated state
  render();

  // Stop adding freelancers if we've reached the maximum
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

/**
 * Calculate the average starting price of freelancers
 */
function calculateAveragePrice() {
  const totalPrices = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
  return totalPrices / freelancers.length;
}
