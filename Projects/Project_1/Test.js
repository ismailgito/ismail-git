document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your BMI is: <strong>${bmi}</strong></p>`;
});