document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Hide the form and show the thank you message
    document.getElementById('applicationForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});