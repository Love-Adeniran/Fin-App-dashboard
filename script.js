const xValues = ["Entertainment", "Bills", "Personal care", "Dining out"];
const yValues = [15, 60, 25, 30];
const barColors = ["rgb(1, 63, 1)", "rgb(0, 182, 195)", "rgb(220, 163, 144)", "rgb(59, 0, 78)"];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        pieHole: 0.5,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        },
        plugins: {
            legend: {
                position: 'right',
                display: false
            }
        }
    }
});