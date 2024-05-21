document.addEventListener('DOMContentLoaded', function() {
    const calendar = flatpickr("#calendar", {
        inline: true,
        onChange: function(selectedDates, dateStr, instance) {
            updateContent(dateStr);
        }
    });
});