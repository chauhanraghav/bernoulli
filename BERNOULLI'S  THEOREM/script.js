// Event listener for the calculate button
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Retrieve input values
    const pressureHead = parseFloat(document.getElementById('pressureHead').value) || 0;
    const velocityHead = parseFloat(document.getElementById('velocityHead').value) || 0;
    const potentialHead = parseFloat(document.getElementById('potentialHead').value) || 0;

    // Bernoulli's Equation: Total Energy = Pressure Head + Velocity Head + Potential Head
    const totalEnergy = pressureHead + velocityHead + potentialHead;

    // Display output values in the table
    document.getElementById('pressureOutput').innerText = pressureHead.toFixed(2) + " m";
    document.getElementById('velocityOutput').innerText = velocityHead.toFixed(2) + " m";
    document.getElementById('potentialOutput').innerText = potentialHead.toFixed(2) + " m";

    // Display total energy result
    document.getElementById('totalEnergyOutput').innerText = totalEnergy.toFixed(2) + " meters";
});
