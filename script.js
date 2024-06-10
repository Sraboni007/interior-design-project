document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.querySelectorAll(".plus-btn");
    const minusButtons = document.querySelectorAll(".minus-btn");
    const signUpButtons = document.querySelectorAll(".sign-up-btn");
    const confirmationMsg = document.getElementById("confirmation-msg");
      const contactForm = document.getElementById("contact-form");

    let roomCount = 1

    plusButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const roomCountText = button.parentElement.querySelector(".room-count");
        const amountText = button.parentElement.querySelector(".amount");
        
        roomCount++;
        roomCountText.textContent = roomCount + " room";
        amountText.textContent = "$" + (roomCount * getRoomPrice(button));
      });
    });
  
    minusButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const roomCountText = button.parentElement.querySelector(".room-count");
        const amountText = button.parentElement.querySelector(".amount");
        
        if (roomCount > 1) {
          roomCount--;
          roomCountText.textContent = roomCount + " room";
          amountText.textContent = "$" + (roomCount * getRoomPrice(button));
        }
      });
    });
  
    
    
    signUpButtons.forEach(function(button) {
        button.addEventListener("click", function() {
         
          
          const confirmationMsg = document.createElement("p");
          confirmationMsg.textContent = "Thank you for choosing " + roomCount + " room";
          const table = button.closest("table");
          const newRow = table.insertRow(button.parentElement.parentElement.rowIndex + 1); // Insert after the current row
          const newCell = newRow.insertCell(0); // Insert in the first column
          newCell.setAttribute("colspan", "2"); // Span the entire row
          newCell.appendChild(confirmationMsg);
        });
      });

    function getRoomPrice(button) {
      const table = button.closest("table");
      if (table.classList.contains("table-1")) {
        return 199;
      } else if (table.classList.contains("table-2")) {
        return 249;
      }
      return 0; // Default to 0 if table not found
    }
  });
  