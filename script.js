function calculateAge() {
    // Get the date of birth from the input field
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);

    // Check if a valid date is selected
    if (isNaN(dob.getTime())) {
        alert("Please select a valid date of birth.");
        return;
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        // If not, subtract 1 from the age
        document.getElementById('result').innerText = "Your age is: " + (age - 1) + " years.";
    } else {
        document.getElementById('result').innerText = "Your age is: " + age + " years.";
    }
}
