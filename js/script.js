function calculateCompleteAge() {
    // Get the input value (birthdate)
    var birthdate = new Date(document.getElementById('birthdate').value);

    // Get the current date
    var today = new Date();

    // Calculate the age
    var age = {
        years: today.getFullYear() - birthdate.getFullYear(),
        months: today.getMonth() - birthdate.getMonth(),
        days: today.getDate() - birthdate.getDate()
    };

    // Adjust for negative values
    if (age.days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
        age.days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    }

    if (age.months < 0) {
        age.months = 12 + age.months;
        age.years--;
    }

    // Display the result
    document.getElementById('result').innerHTML = 'Your age is: ' + age.years + ' years, ' + age.months + ' months, and ' + age.days + ' days';
}
