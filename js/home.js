document.addEventListener('DOMContentLoaded', () => {
    // Get all the buttons that open modals
    const openModalButtons = document.querySelectorAll('.button[data-target]');
    
    // Get all the close buttons
    const closeModalButtons = document.querySelectorAll('.close-button');

    // Function to open a modal
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    };

    // Function to close a modal
    const closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Event listeners for opening modals
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-target');
            openModal(modalId);
        });
    });

    // Event listeners for closing modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            closeModal(modalId);
        });
    });

    // Close modals when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
});
