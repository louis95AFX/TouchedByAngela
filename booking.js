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

function closeHairstyleModal() {
    document.getElementById('hairstylePreviewModal').style.display = 'none';
}

let hairstyleImages = {
    'Straight back': ['TBA1.png', 'TBA1.png', 'TBA1.png'],
    'Straight up': ['TBA2.png', 'TBA2.png'],
    'Tribal braids': ['TBA3.png', 'TBA3.png', 'TBA3.png'],
    'Twist Braid': ['TBA4.png', 'TBA4.png'],
    'Boho Knotless': ['TBA9Boho.jpg', 'TBA10Boho.jpg', 'TBA11Boho.jpg', 'TBA12Boho.jpg', 
        'TBA13Boho.jpg', 'TBA14Boho.jpg', 'TBA15Boho.jpg', 'TBA16Boho.jpg', 'TBA17BOho.jpg', 'TBA18Boho.jpg'],
    'Knotless': ['TBA6.png', 'TBA6.png'],
    'Braids': ['TBA7.png', 'TBA7.png']
};

let currentImages = [];
let currentIndex = 0;

document.getElementById('hairstyle').addEventListener('change', function () {
    let selectedHairstyle = this.value;
    if (hairstyleImages[selectedHairstyle]) {
        currentImages = hairstyleImages[selectedHairstyle];
        currentIndex = 0;
        showHairstyleImage(currentImages[currentIndex], selectedHairstyle);
    } else {
        closeHairstyleModal();
    }
});

function showHairstyleImage(imageSrc, title) {
    document.getElementById('modalHairstyleImage').src = imageSrc;
    document.getElementById('hairstyleTitle').textContent = title;
    document.getElementById('hairstylePreviewModal').style.display = 'block';
}

function closeHairstyleModal() {
    document.getElementById('hairstylePreviewModal').style.display = 'none';
}

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
