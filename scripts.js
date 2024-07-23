document.getElementById('demoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    let data = '';

    formData.forEach((value, key) => {
        data += `${key}: ${value}\n`;
    });

    alert('Form Data Submitted:\n' + data);
});
