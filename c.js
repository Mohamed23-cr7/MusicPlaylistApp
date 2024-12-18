// Open the certificate modal
function openCertificate(certificateName) {
    const modal = document.getElementById('certificate-modal');
    const certificateTitle = document.getElementById('certificate-title');
    const certificateImage = document.getElementById('certificate-image');

    // Example: Dynamically load image based on certificate name
    if (certificateName === 'Certificate 1') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.02.59.jpeg';
    } else if (certificateName === 'Certificate 2') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.00.jpeg';
    } else if (certificateName === 'Certificate 3') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.00 (1).jpeg';
    } else if (certificateName === 'Certificate 4') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.01.jpeg';
    } else if (certificateName === 'Certificate 5') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.02.jpeg';
    } else if (certificateName === 'Certificate 6') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.03.jpeg';
    } else if (certificateName === 'Certificate 7') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.03 (1).jpeg';
    } else if (certificateName === 'Certificate 8') {
        certificateImage.src = 'Certificates/WhatsApp Image 2024-12-18 at 09.03.00 (2).jpeg';
    }

    certificateTitle.textContent = certificateName;
    modal.style.display = 'flex';
}

// Close the modal
function closeCertificate() {
    const modal = document.getElementById('certificate-modal');
    modal.style.display = 'none';
}
