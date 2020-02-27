 const fetch = require("node-fetch");
        const xLabels = [];
        const yData = [];

        async function chartIt() {
            await getData();
            var ctx = document.getElementById('canvas').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar', //Line is another possibility
                data: {
                    labels: xLabels,
                    datasets: [{
                        label: 'Global Average Temperature',
                        data: yData,
                        //fill: false,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    callback: function(value, index, values){
                                        return value + '°';
                                    }
                                }
                            }
                        ]
                    }
                }
            });
        }

        //Data from: https://data.giss.nasa.gov/gistemp/
        chartIt();

        async function getData() {
            //const response = await fetch('save.csv');
            const response = await fetch('https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv');
            const data = await response.text();

            //Slicing the first row, as it is only meaningful for humans
            const table = data.split('\n').slice(1);
            table.forEach(row => {
                const splitRow = row.split(",");
                const year = splitRow[0];
                xLabels.push(year);
                const temp = splitRow[1];
                yData.push(parseFloat(temp) + 14);


                console.log(year, temp);
            })
            //console.log(rows);

        }