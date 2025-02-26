document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    // Show loading row initially
    output.innerHTML = `<tr id="loading"><td colspan="2" class="text-center">Loading...</td></tr>`;

    // Function to create a promise that resolves after a random time
    function createPromise(index) {
        return new Promise((resolve) => {
            let timeTaken = (Math.random() * 2 + 1).toFixed(3); // Random time between 1-3 sec
            setTimeout(() => resolve({ name: `Promise ${index}`, time: timeTaken }), timeTaken * 1000);
        });
    }

    // Creating 3 promises
    let promises = [createPromise(1), createPromise(2), createPromise(3)];

    // Wait for all promises to resolve
    Promise.all(promises).then((results) => {
        output.innerHTML = ""; // Remove loading row

        results.forEach((result) => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
            output.appendChild(row);
        });

        // Calculate total time (maximum of all promise resolution times)
        let totalTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);
        let totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
        output.appendChild(totalRow);
    });
});
