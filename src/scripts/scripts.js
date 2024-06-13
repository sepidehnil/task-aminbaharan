// Dummy data for team members card
const dummyData = [
  {
    id: 1,
    image: "./src/image/images.jpg",
    name: "Julian Jameson",
    job: "Teacher",
  },
  {
    id: 2,
    image: "./src/image/linkedin-profile-picture-squinch.jpg",
    name: "Sepideh Nilforouhan",
    job: "Manager",
  },
  {
    id: 3,
    image: "./src/image/linkedin-profile-picture.jpg",
    name: "Amir Esmailian",
    job: "Teacher",
  },
  {
    id: 4,
    image: "./src/image/7c2fa96f25db5c093927de204b507170.jpg",
    name: "David Smith",
    job: "Chef",
  },
];

// Select the element with id "card" to display the team member cards
const card = document.getElementById("card");

// Iterate over dummyData to create and append team member cards
dummyData.map((item) => {
  card.innerHTML += `
    <div class="w-[300px] shadow-xl text-center rounded-2xl m-auto md:w-[260px]">
      <img src=${item.image} class="w-full bg-cover rounded-t-2xl h-[200px]" alt="${item.name}" />
      <div class="py-6">
        <h1 class="text-lg font-bold text-[#252b42]">${item.name}</h1>
        <p class="text-[#737373] mb-1">${item.job}</p>
        <div class="flex items-center justify-center gap-5">
          <i class="bi bi-facebook text-[#96BA7B] text-lg"></i>
          <i class="bi bi-instagram text-[#96BA7B] text-lg"></i>
          <i class="bi bi-twitter text-[#96BA7B] text-lg"></i>
        </div>
      </div>
    </div>`;
});

// Add event listener to the subscribe button
document.getElementById("subscribe").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the email input value
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Get the error message element
  const errorMessage = document.getElementById("error-message");

  // Validate the email address
  if (validateEmail(email)) {
    // If email is valid, hide the error message and show a success alert
    errorMessage.classList.add("hidden");
    alert("Thank you for subscribing!");
  } else {
    // If email is invalid, show the error message
    errorMessage.classList.remove("hidden");
  }
});

// Function to validate email addresses
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to test email format
  return regex.test(email); // Return true if the email matches the regex
}
