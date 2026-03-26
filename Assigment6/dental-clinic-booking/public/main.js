document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = document.getElementById('submitBtn');
            const messageDiv = document.getElementById('formMessage');

            // Basic UI loading state
            btn.disabled = true;
            btn.innerHTML = '<span style="opacity: 0.7;">Booking...</span>';
            messageDiv.style.display = 'none';
            messageDiv.className = 'form-message';

            const formData = {
                patientName: document.getElementById('patientName').value,
                patientPhone: document.getElementById('patientPhone').value,
                dentist: document.getElementById('dentist').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value
            };

            try {
                const response = await fetch('/api/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                messageDiv.style.display = 'block';

                if (response.ok) {
                    messageDiv.className = 'form-message success fade-in';
                    messageDiv.textContent = data.message || 'Booking confirmed! We look forward to seeing you.';
                    bookingForm.reset();

                    // Show modal or redirect to dashboard after a delay
                    setTimeout(() => {
                        window.location.href = '/dashboard';
                    }, 2000);
                } else {
                    messageDiv.className = 'form-message error fade-in-up';
                    messageDiv.textContent = data.error || 'Failed to book appointment.';
                }
            } catch (err) {
                messageDiv.style.display = 'block';
                messageDiv.className = 'form-message error fade-in-up';
                messageDiv.textContent = 'Network error. Please try again or contact the clinic.';
            } finally {
                btn.disabled = false;
                btn.textContent = 'Confirm Booking';
            }
        });
    }
});
