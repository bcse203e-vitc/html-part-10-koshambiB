document.getElementById('generateBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (!number) return;

    let tableHTML = '<table><tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>';

    for(let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${number}</td><td>${i}</td><td>${number * i}</td></tr>`;
    }

    tableHTML += '</table>';
    document.getElementById('tableContainer').innerHTML = tableHTML;
});
