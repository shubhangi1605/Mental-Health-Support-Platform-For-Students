function bookAppointment(doctorName, doctorFees, doctorSpecialty, doctorLanguages) {
    // Set doctor details dynamically
    const doctorInfo = document.getElementById('doctorInfo');
    doctorInfo.innerHTML = `
        <h2>${doctorName}</h2>
        <p><strong>Specialty:</strong> ${doctorSpecialty}</p>
        <p><strong>Fees:</strong> ${doctorFees}</p>
        <p><strong>Languages:</strong> ${doctorLanguages}</p>
        <button class="btn" onclick="alert('Appointment booked with ${doctorName}')">Confirm Appointment</button>
    `;
}
// Function to toggle between Sign In and Sign Up forms
function toggleForm() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
  
    signInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');
  }
  
  // Function to validate the Sign Up form
  function validateSignUpForm() {
    const password = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById("signUpConfirmPassword").value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  }
  
  // Function to validate the Sign In form
  function validateLoginForm() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    // Check if both fields are filled
    if (!email || !password) {
      alert("Please fill out both fields.");
      return false;
    }
    return true;
  }
  const tabs = document.querySelectorAll('.tab');
  const findDoctorButton = document.getElementById('find-doctor');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // Remove active class from all tabs and tab contents
          tabs.forEach(t => t.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
  
          // Add active class to the clicked tab
          tab.classList.add('active');
  
          // Get the data-tab value and display the corresponding content
          const selectedTab = tab.dataset.tab;
          const activeContent = document.getElementById(${selectedTab}-content);
          activeContent.classList.add('active');
      });
  });
  
  findDoctorButton.addEventListener('click', () => {
      // Placeholder logic for "Find a Doctor"
      alert('Finding a doctor feature is not yet implemented.');
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const paymentMethod = document.getElementById("payment-method");
    const paymentInfo = document.getElementById("payment-info");

    // Show/Hide Payment Details Based on Selection
    paymentMethod.addEventListener("change", function () {
        if (this.value === "online") {
            paymentInfo.style.display = "block";
        } else {
            paymentInfo.style.display = "none";
        }
    });

    // Form Submission Validation
    document.getElementById("payment-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const selectedPayment = paymentMethod.value;
        
        if (selectedPayment === "online") {
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvv = document.getElementById("cvv").value;

            if (!cardNumber || !expiryDate || !cvv) {
                alert("Please enter valid payment details.");
                return;
            }
        }

        alert("Payment processed successfully!");
        this.reset();
        paymentInfo.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const paymentMethod = document.getElementById("payment-method");
    const paymentInfo = document.getElementById("payment-info");

    // Show/Hide Payment Details Based on Selection
    paymentMethod.addEventListener("change", function () {
        if (this.value === "online") {
            paymentInfo.style.display = "block";
        } else {
            paymentInfo.style.display = "none";
        }
    });

    // Form Submission Validation
    document.getElementById("payment-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const selectedPayment = paymentMethod.value;
        
        if (selectedPayment === "online") {
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvv = document.getElementById("cvv").value;

            if (!cardNumber || !expiryDate || !cvv) {
                alert("Please enter valid payment details.");
                return;
            }
        }

        alert("Payment processed successfully!");
        this.reset();
        paymentInfo.style.display = "none";
    });
});  

function startChat(method) {
    switch (method) {
        case 'text':
            alert("You have chosen to start a text chat.");
            break;
        case 'voice':
            alert("You have chosen to make a voice call.");
            break;
        case 'video':
            alert("You have chosen to start a video call.");
            break;
        default:
            alert("Invalid choice.");
    }
}
  
