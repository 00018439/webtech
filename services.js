document.getElementById('generateTable').addEventListener('click', function () {
    const services = [
        { name: 'Web Development', price: '$100/hr' },
        { name: 'Consulting', price: '$150/hr' },
        { name: 'SEO Optimization', price: '$80/hr' }
    ];

    const tableContainer = document.getElementById('tableContainer');
    let table = '<table border="1" style="width:100%; text-align:left;">';
    table += '<tr><th>Service</th><th>Price</th></tr>';

    services.forEach(service => {
        table += `<tr><td>${service.name}</td><td>${service.price}</td></tr>`;
    });

    table += '</table>';
    tableContainer.innerHTML = table;
});
