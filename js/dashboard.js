$(document).ready(function () {

    // Function to update date and time
    function updateDateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      const formattedDateTime = now.toLocaleString('en-US', options);
      document.getElementById('dateTime').innerText = formattedDateTime;
    }

    // Update the time once when the page loads
    updateDateTime();
    // Update the time every second
    setInterval(updateDateTime, 1000);  

  });