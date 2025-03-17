function openModal(title, description, showHairstyles = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceModal').style.display = 'block';

    if (showHairstyles) {
        document.getElementById('hairstyleSelection').style.display = 'block';
    } else {
        document.getElementById('hairstyleSelection').style.display = 'none';
    }
}
function openBrazilianHairModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceBrazilianHairModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('brazilianSelection').style.display = 'block';
    } else {
        document.getElementById('brazilianSelection').style.display = 'none';
    }
}

function openGentsModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceGentsModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('gentsSelection').style.display = 'block';
    } else {
        document.getElementById('gentsSelection').style.display = 'none';
    }
}

function openManicureModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceManicuresModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('ManicureSelection').style.display = 'block';
    } else {
        document.getElementById('ManicureSelection').style.display = 'none';
    }
}

function openPedicureModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('servicePedicureModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('PedicureSelection').style.display = 'block';
    } else {
        document.getElementById('PedicureSelection').style.display = 'none';
    }
}

function openNailsModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceNailsModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('NailsSelection').style.display = 'block';
    } else {
        document.getElementById('NailsSelection').style.display = 'none';
    }
}
function openMakeupModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceMakeupModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('MakeupSelection').style.display = 'block';
    } else {
        document.getElementById('MakeupSelection').style.display = 'none';
    }
}

function openEyelashModal(title, description, ShowService = false) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('serviceEylashModal').style.display = 'block';

    if (ShowService) {
        document.getElementById('EyelashSelection').style.display = 'block';
    } else {
        document.getElementById('EyelashSelection').style.display = 'none';
    }
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
    document.getElementById('serviceBrazilianHairModal').style.display = 'none';
    document.getElementById('serviceGentsModal').style.display = 'none';
    document.getElementById('serviceManicuresModal').style.display = 'none';
    document.getElementById('servicePedicureModal').style.display = 'none';
    document.getElementById('serviceNailsModal').style.display = 'none';
    document.getElementById('serviceMakeupModal').style.display = 'none';
    document.getElementById('serviceEylashModal').style.display = 'none';


    // Ensure the hairstyle selection is hidden when the modal is closed
    document.getElementById('hairstyleSelection').style.display = 'none';
    document.getElementById('brazilianSelection').style.display = 'none';
    document.getElementById('gentsSelection').style.display = 'none';
    document.getElementById('ManicureSelection').style.display = 'none';
    document.getElementById('PedicureSelection').style.display = 'none';
    document.getElementById('NailsSelection').style.display = 'none';
    document.getElementById('MakeupSelection').style.display = 'none';
    document.getElementById('EyelashSelection').style.display = 'none';

}
function openPaymentModal() {
    document.getElementById('summaryName').innerText = document.getElementById('name').value;
    document.getElementById('summaryPhone').innerText = document.getElementById('phone').value;
    document.getElementById('summaryEmail').innerText = document.getElementById('email').value;
    document.getElementById('PaymentModal').style.display = "block";
}

function closePaymentModal() {
    document.getElementById('PaymentModal').style.display = "none";
}
window.onclick = function(event) {
    let modal = document.getElementById('serviceModal','serviceBrazilianHairModal');
    if (event.target === modal) {
        closeModal();
    }
}

function showLengthOptions() {
    let hairstyle = document.getElementById("hairstyle").value;
    let lengthSelection = document.getElementById("lengthSelection");

    if (hairstyle) {
        lengthSelection.style.display = "block";
    } else {
        lengthSelection.style.display = "none";
    }
}
function showColorOptions() {
    let hairstyle = document.getElementById("hairstyle").value;
    let colorSelection = document.getElementById("colorSelection");

    if (hairstyle) {
        colorSelection.style.display = "block";
    } else {
        colorSelection.style.display = "none";
    }
}
function showSizeAndLengthOptions() {
    let hairstyle = document.getElementById("hairstyle").value;
    let sizeSelection = document.getElementById("sizeSelection");
    let lengthSelection = document.getElementById("lengthSelection");
    let colorSelection = document.getElementById("colorSelection");
    let lengthDropdown = document.getElementById("length");

    // Show size and length options when a hairstyle is selected
    sizeSelection.style.display = "block";
    lengthSelection.style.display = "block";
    colorSelection.style.display = "block";

    // Reset length options
    lengthDropdown.innerHTML = '<option value="" disabled selected>Select a length</option>';

    // Define length options for each hairstyle
    let lengthOptions = {
        "Straight back": ["Back length", "Bum length", "Back length + curls", "Bum length + curls"],
        "Straight up": ["Back length", "Bum length", "Back length + curls","Bum length + curls"],
        "Tribal braids": ["Short (Shoulder length)", "Medium (Back length)","Extra Long (Bum length)"],
        "Twist Braid": ["Short (Shoulder length)", "Medium (Back length)", "Extra Long (Bum length)"],
        "Boho Knotless": ["Short (Shoulder length)", "Medium (Back length)","Extra Long (Bum length)"],
        "Knotless": ["Short (Shoulder length)", "Medium (Back length)","Extra Long (Bum length)"],
        "Braids": ["Short (Shoulder length)","Medium (Back length)","Extra Long (Bum length)"]
    };
    
   
    // Populate length dropdown with corresponding options
    if (hairstyle in lengthOptions) {
        lengthOptions[hairstyle].forEach(length => {
            let option = document.createElement("option");
            option.value = length;
            option.textContent = length;
            lengthDropdown.appendChild(option);
        });
    }
}

function showSizeOptions() {
    let hairstyle = document.getElementById("hairstyle").value;
    let length = document.getElementById("length").value;
    let sizeSelection = document.getElementById("sizeSelection");
    let sizeDropdown = document.getElementById("size");
    let priceDisplay = document.getElementById("price");

    sizeDropdown.innerHTML = '<option value="" disabled selected>Select a size</option>'; // Reset options
    priceDisplay.style.display = "none";  // Hide price tag initially

    let pricing = {
        "Boho Knotless": {
            "Short (Shoulder length)":{ "Big": 450, "Medium": 500, "Small": 550 },
            "Medium (Back length)": { "Big": 550, "Medium": 650, "Small": 750 },
            "Extra Long (Bum length)": { "Big": 650, "Medium": 750, "Small": 850 }
        },
        "Straight back": {
            "Back length": { "Big": 270, "Medium": 310, "Small": 350 },
            "Bum length": { "Big": 320, "Medium": 360, "Small": 400 },
            "Back length + curls": { "Big": 370, "Medium": 410, "Small": 450 },
            "Bum length + curls": { "Big": 380, "Medium": 420, "Small": 480 }
        },
        "Straight up": {
            "Back length": { "Big": 340, "Medium": 380, "Small": 400 },
            "Bum length": { "Big": 320, "Medium": 360, "Small": 400 },
            "Back length + curls": { "Big": 400, "Medium": 440, "Small": 480 },
            "Bum length + curls": { "Big": 480, "Medium": 560, "Small": 580 }
        },
        "Tribal braids": {
            "Short (Shoulder length)":{ "Big": 400, "Medium": 450, "Small": 500 },
            "Medium (Back length)": { "Big": 500, "Medium": 600, "Small": 700 },
            "Extra Long (Bum length)": { "Big": 600, "Medium": 700, "Small": 800 }
        },
        "Twist Braid": {
            "Short (Shoulder length)":{ "Big": 500, "Medium": 550, "Small": 600 },
            "Medium (Back length)": { "Big": 550, "Medium": 650, "Small": 750 },
            "Extra Long (Bum length)": { "Big": 650, "Medium": 750, "Small": 900 }
        },
        "Knotless": {
            "Short (Shoulder length)":{ "Big": 400, "Medium": 450, "Small": 500 },
            "Medium (Back length)": { "Big": 550, "Medium": 650, "Small": 750 },
            "Extra Long (Bum length)": { "Big": 650, "Medium": 750, "Small": 900 }
        },
        "Braids": {
            "Short (Shoulder length)":{ "Big": 400, "Medium": 450, "Small": 500 },
            "Medium (Back length)": { "Big": 500, "Medium": 550, "Small": 600 },
            "Extra Long (Bum length)": { "Big": 600, "Medium": 700, "Small": 800 }
        }
    };

    if (pricing[hairstyle] && pricing[hairstyle][length]) {
        Object.keys(pricing[hairstyle][length]).forEach(size => {
            let option = document.createElement("option");
            option.value = size;
            option.textContent = `${size} - R${pricing[hairstyle][length][size]}`;
            sizeDropdown.appendChild(option);
        });
        sizeSelection.style.display = "block";
    } else {
        sizeSelection.style.display = "none";
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showHairstyleImage(imageSrc, hairstyleName) {
    if (imageSrc) {
        document.getElementById('modalHairstyleImage').src = imageSrc;
        document.getElementById('hairstyleTitle').innerText = hairstyleName; // Update the heading
        document.getElementById('hairstylePreviewModal').style.display = 'block';
    }
}
// Dragging functionality
let isDragging = false;
let offsetX, offsetY;

function dragStart(event) {
    isDragging = true;
    
    // Check if it's a touch event
    if (event.type === "touchstart") {
        offsetX = event.touches[0].clientX - document.getElementById('hairstylePreviewModal').offsetLeft;
        offsetY = event.touches[0].clientY - document.getElementById('hairstylePreviewModal').offsetTop;
    } else {
        offsetX = event.clientX - document.getElementById('hairstylePreviewModal').offsetLeft;
        offsetY = event.clientY - document.getElementById('hairstylePreviewModal').offsetTop;
    }

    // Attach move and end event listeners
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchmove', dragMove);
    document.addEventListener('touchend', dragEnd);
}

function dragMove(event) {
    if (isDragging) {
        let clientX, clientY;

        // Check if it's a touch event
        if (event.type === "touchmove") {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        // Calculate new position
        const left = clientX - offsetX;
        const top = clientY - offsetY;

        // Move the modal to the new position
        document.getElementById('hairstylePreviewModal').style.left = left + 'px';
        document.getElementById('hairstylePreviewModal').style.top = top + 'px';
    }
}

function dragEnd() {
    isDragging = false;
    // Remove event listeners once the drag is complete
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('touchend', dragEnd);
}

// Attach event listeners to the modal header or drag area
document.getElementById('hairstylePreviewModal').addEventListener('mousedown', dragStart);
document.getElementById('hairstylePreviewModal').addEventListener('touchstart', dragStart);


// Show the modal with the image and title
function showHairstyleImage(imageSrc, hairstyleName) {
    if (imageSrc) {
        document.getElementById('modalHairstyleImage').src = imageSrc;
        document.getElementById('hairstyleTitle').innerText = hairstyleName; // Update the heading
        document.getElementById('hairstylePreviewModal').style.display = 'block';
    }
}

// Close the modal
function closeHairstyleModal() {
    document.getElementById('hairstylePreviewModal').style.display = 'none';
}


function closeHairstyleModal() {
    document.getElementById('hairstylePreviewModal').style.display = 'none';
}

let hairstyleImages = {
    'Straight back': {
        'default': ['sb2.jpg'],
        'Straight back with curls at the end': ['sb15.jpg', 'sb17.jpg'],
        'Straight back with beads': ['sbwb1.jpg', 'sbwb2.jpg', 'sbwb3.jpg', 'sbwb4.jpg', 'sbwb5.jpg'],
        'Boho Straight back': ['sb4.jpg', 'sb7.jpg']
    },
    'Straight up': {
    'default': ['stu1.jpg','stu2.jpg','stu3.jpg','stu4.jpg','stu5.jpg','stu6.jpg'],
    'Kids straight up': ['kid5.jpg', 'kid1.jpg', 'kid3.jpg', 'kid2.jpg', 'kid4.jpg', 'kid6.jpg', 'kid7.jpg',
         'kid8.jpg', 'kid9.jpg'], 
    'Adult straight up': ['stu13.jpg','stu8.jpg','stu9.jpg','stu10.jpg','stu11.jpg','stu12.jpg'] 
    },
    'Tribal braids': {
    'default': ['twc10.jpg', 'twc9.jpg'],
    'Tribal with bonding': ['twb.jpg', 'twb1.jpg'], 
    'Tribal with curls': ['twc1.jpg', 'twc2.jpg', 'twc3.jpg', 'twc4.jpg', 'twc5.jpg', 'twc6.jpg', 'twc7.jpg', 
        'twc8.jpg', 'twc9.jpg'] ,
        'Tribal with twist': ['twt.jpg', 'twt1.jpg'] 
    },
    'Twist Braid': {
        'default': ['TBA4.png', 'TBA4.png'],
        'Twist with curls at the end': ['sb14.jpg', 'sb17.jpg'], 
        'Short boho twist': ['st1.jpg', 'st2.jpg', 'st3.jpg', 'st4.jpg','st5.jpg'],
        'Long boho twist': ['blt.jpg', 'blt1.jpg', 'blt2.jpg'] ,
        'Knotless Twist': ['sb12.jpg', 'sb17.jpg'],
        'Normal boho twist': ['sb11.jpg', 'sb17.jpg'] 
    },
    'Boho Knotless': {
        'default': ['TBA9Boho.jpg', 'TBA10Boho.jpg'],
     
    },
    'Knotless': {
        'default': ['TBA6.png', 'TBA6.png'],
       
    },
    'Braids': {
        'default': ['TBA7.png', 'TBA7.png'],
        'Braids with curls at the end': ['sb12.jpg', 'sb17.jpg'], 
        'Boho Braids': ['sb15.jpg', 'sb17.jpg'] 
    }
};

let pricing = {
    "Boho Knotless": {
        "Short (Shoulder length)": { "Big": 450, "Medium": 500, "Small": 550 },
        "Medium (Back length)": { "Big": 550, "Medium": 650, "Small": 750 },
        "Extra Long (Bum length)": { "Big": 650, "Medium": 750, "Small": 850 }
    },
    "Straight back": {
        "Back length": { "Big": 270, "Medium": 310, "Small": 350 },
        "Bum length": { "Big": 320, "Medium": 360, "Small": 400 },
        "Back length + curls": { "Big": 370, "Medium": 410, "Small": 450 },
        "Bum length + curls": { "Big": 380, "Medium": 420, "Small": 480 }
    }
};

let currentImages = [];
let currentIndex = 0;

// Handle hairstyle selection
document.getElementById('hairstyle').addEventListener('change', function () {
    let selectedHairstyle = this.value;

    if (hairstyleImages[selectedHairstyle]) {
        let defaultImages = hairstyleImages[selectedHairstyle]['default'] || [];
        currentImages = defaultImages;
        currentIndex = 0;
        if (currentImages.length > 0) {
            showHairstyleImage(currentImages[currentIndex], selectedHairstyle);
        }

        // Manage dropdown visibility dynamically
        let dropdowns = {
            "Straight back": 'BohoSelection',
            "Straight up": 'BohoupSelection',
            "Tribal braids": 'tribalSelection',
            "Twist Braid" : 'twistSelection',
            "Braids" : 'BraidsSelection'
        };

        Object.keys(dropdowns).forEach(key => {
            document.getElementById(dropdowns[key]).style.display = key === selectedHairstyle ? "block" : "none";
        });

        // Reset values only if the dropdown is hidden
        if (selectedHairstyle !== "Straight back") document.getElementById('Boho').value = "default";
        if (selectedHairstyle !== "Straight up") document.getElementById('Bohoup').value = "default";
        if (selectedHairstyle !== "Tribal braids") document.getElementById('tribal').value = "default";
        if (selectedHairstyle !== "Twist Braid") document.getElementById('twist').value = "default";
        if (selectedHairstyle !== "Braids") document.getElementById('Braids').value = "default";

    } else {
        closeHairstyleModal();
    }
});


// Handle type selection
document.getElementById('Boho').addEventListener('change', function () {
    updateImageAndPrice();
});
document.getElementById('Bohoup').addEventListener('change', function () {
    updateImageAndPrice();
});
document.getElementById('tribal').addEventListener('change', function () {
    updateImageAndPrice();
});
document.getElementById('twist').addEventListener('change', function () {
    updateImageAndPrice();
});
document.getElementById('Braids').addEventListener('change', function () {
    updateImageAndPrice();
});
// Handle size selection
document.getElementById('size').addEventListener('change', function () {
    updateImageAndPrice();
});

// Function to update image & price
function updateImageAndPrice() {
    let selectedHairstyle = document.getElementById('hairstyle').value;
    
    // Determine selected type based on which dropdown is visible
    let selectedType = document.getElementById('BohoSelection').style.display === "block"
    ? document.getElementById('Boho').value
    : document.getElementById('BohoupSelection').style.display === "block"
    ? document.getElementById('Bohoup').value
    : document.getElementById('tribalSelection').style.display === "block"
    ? document.getElementById('tribal').value
    : document.getElementById('twistSelection').style.display === "block"
    ? document.getElementById('twist').value
    : document.getElementById('BraidsSelection').style.display === "block"
    ? document.getElementById('Braids').value
    : 'default';


    let selectedSize = document.getElementById('size').value;

    // Update image if available
    if (hairstyleImages[selectedHairstyle]) {
        currentImages = hairstyleImages[selectedHairstyle][selectedType] || hairstyleImages[selectedHairstyle]['default'];
        if (currentImages.length > 0) {
            currentIndex = 0; // Reset index when type changes
            document.getElementById('modalHairstyleImage').src = currentImages[currentIndex];
        }
    }

    // Update price if available
    if (pricing[selectedHairstyle] && pricing[selectedHairstyle][selectedType] && pricing[selectedHairstyle][selectedType][selectedSize]) {
        let price = pricing[selectedHairstyle][selectedType][selectedSize];
        document.getElementById('priceDisplay').textContent = "Price: R" + price;
    } else {
        document.getElementById('priceDisplay').textContent = "Price: N/A"; // Fallback if no price is found
    }
}


// Function to display image in modal
function showHairstyleImage(imageSrc, title) {
    document.getElementById('modalHairstyleImage').src = imageSrc;
    document.getElementById('hairstyleTitle').textContent = title;
    document.getElementById('hairstylePreviewModal').style.display = 'block';
}

// Function to close the modal
function closeHairstyleModal() {
    document.getElementById('hairstylePreviewModal').style.display = 'none';
}

// Function to navigate images
function nextImage() {
    if (currentImages.length > 1) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        document.getElementById('modalHairstyleImage').src = currentImages[currentIndex];
    }
}

function prevImage() {
    if (currentImages.length > 1) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        document.getElementById('modalHairstyleImage').src = currentImages[currentIndex];
    }
}


 // Time picker logic
 document.getElementById('bookingTime').addEventListener('change', function() {
    let selectedTime = this.value;
    
    // Show the time selection display
    document.getElementById('selectedBookingTime').style.display = 'block';
    document.getElementById('selectedBookingTime').innerText = 'Selected Time: ' + selectedTime;
});
// Set minimum date to 3 days from today
document.addEventListener("DOMContentLoaded", function() {
    const bookingDateInput = document.getElementById('bookingDate');
    const today = new Date();
    today.setDate(today.getDate() + 3); // Add 3 days to the current date

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get month with leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Get day with leading zero

    const minDate = `${year}-${month}-${day}`;
    bookingDateInput.min = minDate;
});
// Display selected booking date
document.getElementById('bookingDate').addEventListener('change', function() {
    const selectedDate = this.value;
    const selectedBookingDate = document.getElementById('selectedBookingDate');
    
    if (selectedDate) {
        selectedBookingDate.style.display = 'block';
        selectedBookingDate.textContent = 'Selected Date: ' + selectedDate;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Ensure overlay is hidden when the page loads
    document.getElementById("loadingOverlay").style.display = "none";
});

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Delay showing the overlay to ensure the DOM updates
    setTimeout(() => {
        document.getElementById("loadingOverlay").style.display = "flex";
    }, 10);

    const formData = {
        name: document.getElementById("name").value,
        cell: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        date: document.getElementById("bookingDate").value,
        time: document.getElementById("bookingTime").value,
        hairstyle: document.getElementById("hairstyle").value,
        length: document.getElementById("length").value,
        size: document.getElementById("size").value,
        color: document.getElementById("color").value,
        approved: false
    };

    try {
        const response = await fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            document.getElementById("bookingForm").reset();
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Error saving booking");
    } finally {
        // Hide the loading overlay after response
        document.getElementById("loadingOverlay").style.display = "none";
    }
});

// Open the modal
function openAdminModal() {
    document.getElementById('loginAdminModal').style.display = 'flex';
  }

  // Close the modal
  function closeAdminModal() {
    document.getElementById('loginAdminModal').style.display = 'none';
  }

  // Login function (you can replace this with your logic)
  function Adminlogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded username and password
    const correctUsername = "admin";
    const correctPassword = "password123"; // Replace with your actual password
  
    if (username === correctUsername && password === correctPassword) {
      closeAdminModal();
      // Redirect to admin.html
      window.location.href = 'admin.html';
    } else {
      alert('Incorrect username or password');
    }
  }
  // Function to show the appropriate selection options based on the hairstyle selected
  function showSelectionOptions() {
    const hairstyle = document.getElementById('hairstyle').value;
    const tribalSelection = document.getElementById('tribalSelection');
    const braidsSelection = document.getElementById('BraidsSelection');
    const bohoSelection = document.getElementById('BohoSelection');
    const bohoupSelection = document.getElementById('BohoupSelection');
    const twistSelection = document.getElementById('twistSelection');
    const hairpiceSelection = document.getElementById('HairpiceSelection');
    const freeHandSelection = document.getElementById('FreeHandSelection');
    const locksSelection = document.getElementById('locksSelection');

    // Show tribal selection if "Tribal braids" is selected
    if (hairstyle === "Tribal braids") {
        tribalSelection.style.display = 'block';
    } else {
        tribalSelection.style.display = 'none';
    }
    
    // Show braids selection if "Braids" is selected
    if (hairstyle === "Braids") {
        braidsSelection.style.display = 'block';
    } else {
        braidsSelection.style.display = 'none';
    }

    // Show straight back selection if "Straight back" is selected
    if (hairstyle === "Straight back") {
        bohoSelection.style.display = 'block';
    } else {
        bohoSelection.style.display = 'none';
    }
    if (hairstyle === "Straight up") {
        bohoupSelection.style.display = 'block';
    } else {
        bohoupSelection.style.display = 'none';
    }
    // Show twist selection if "Twist Braid" is selected
    if (hairstyle === "Twist Braid") {
        twistSelection.style.display = 'block';
        hairpiceSelection.style.display = 'block'; // Show Hairpice selection when Twist Braid is selected
    } else {
        twistSelection.style.display = 'none';
        hairpiceSelection.style.display = 'none'; // Hide Hairpice selection when Twist Braid is not selected
    }
    // Show Free Hand selection if "Free Hand" is selected
    if (hairstyle === "Free Hand") {
        freeHandSelection.style.display = 'block';
    } else {
        freeHandSelection.style.display = 'none';
    }
    // Show locks selection if "Locks" is selected
    if (hairstyle === "Locks") {
        locksSelection.style.display = 'block';
    } else {
        locksSelection.style.display = 'none';
    }
}

// Initially run the function to handle default state
showSelectionOptions();
