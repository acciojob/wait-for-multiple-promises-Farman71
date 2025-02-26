//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    // Show loading row initially
    output.innerHTML = `<tr><td colspan="2" class="text-center">Loading...</td></tr>`;
	function createPromise(index)
	{
		return new Promise((resolve)=>{
			let timeTaken=(Math.random()*2+1).toFixed(3);
			setTimeout(()=>{
				setTimeout(() => resolve({ name: `Promise ${index}`, time: timeTaken }), timeTaken * 1000);
		})
	}
	let promises = [createPromise(1), createPromise(2), createPromise(3)];
	Promise.all(promises).then((results) => {
	    output.innerHTML = "";
		results.forEach(results=>{
			let row=document.createElement("tr");
			row.innerHTML =`<td>${results.name}</td><td>${results.time}</td>`;
			output.appendChild(row);
		})
		 let totalTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);
        let totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
        output.appendChild(totalRow);
	})
});