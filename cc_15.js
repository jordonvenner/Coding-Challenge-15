// Task 1_2: Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");




// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    // Create a new risk card (div)
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
  
    // Add risk details to the card
    riskCard.innerHTML = `
      <p><strong>Risk Name:</strong> ${riskName}</p>
      <p><strong>Risk Level:</strong> ${riskLevel}</p>
      <p><strong>Department:</strong> ${department}</p>
      <button class="resolveBtn">Resolve</button>
    `;
  
    // Task 3: Removing Risk Items
    const resolveBtn = riskCard.querySelector(".resolveBtn");
    resolveBtn.addEventListener("click", () => {
      riskDashboard.removeChild(riskCard); // Remove the risk card
    });
  
    // Append the risk card to the dashboard
    riskDashboard.appendChild(riskCard);
  }
  
  // Allow users to input a new risk using the form
  const riskForm = document.getElementById("riskForm");
  riskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    const riskName = prompt("Enter Risk Name:"); // Temporary input method
    const riskLevel = prompt("Enter Risk Level (Low, Medium, High):"); // Temporary input method
    const department = prompt("Enter Department:"); // Temporary input method
  
    // Validate input
    if (riskName && riskLevel && department) {
      addRiskItem(riskName, riskLevel, department);
    } else {
      alert("Please fill in all fields.");
    }
  });

// Test Case
//addRiskItem("Market Fluctuations", "High", "Finance");



