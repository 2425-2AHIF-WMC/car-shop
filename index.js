document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const appointment = {
            name: form.name.value,
            email: form.email.value,
            date: form.date.value,
            service: form.service.value,
        };

        try {
            const response = await fetch('http://localhost:3000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointment)
            });

            if (response.ok) {
                form.reset();
                message.classList.remove('hidden');
                message.textContent = '✅ Appointment booked!';
            } else {
                throw new Error('Network error');
            }
        } catch (error) {
            message.classList.remove('hidden');
            message.textContent = '❌ Failed to book appointment. Please try again.';
            message.classList.replace('text-green-500', 'text-red-500');
        }
    });
});
