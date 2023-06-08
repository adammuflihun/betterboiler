export const postcodecookie = () => {
  //   console.log('cookie');

  $(document).ready(function () {
    // Function to save value in cookie consent
    function saveToCookieConsent() {
      var inputValue = $('[post="code"]').val(); // Get the value from the input element
      // Save the value in a cookie
      // Replace 'cookieName' with the desired name for your cookie
      Cookies.set('cookieName', inputValue, { expires: 365, path: '/' });
      //   console.log(Cookies.get('cookieName')); // Log the cookie value to the console
    }

    // Bind click event to the submit button
    $('[data-form="submit-btn"]').click(function () {
      saveToCookieConsent(); // Call the saveToCookieConsent function when the button is clicked
    });
  });
};
