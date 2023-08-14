const tblValores = document.getElementById("tblValores") 

function Datos () {
    const grafico = document.getElementById("myChart").getContext("2d")
    axios.get("https://api.coincap.io/v2/assets").then(resultado => {
            const etiquetas = resultado.data.data.map(item => {
                return item.name.toUpperCase();
            })

            //valores a comparar
            const precio = resultado.data.data.map(item => {
                return parseInt(item.priceUsd)
            })

            const myChart = new Chart(grafico, {
                type:"line",
                data:{
                    labels: etiquetas,
                    datasets:[
                        {
                            label: "Valor del Dolar",
                            data: precio,
                            fill: true,
                            backgroundColor: "blue",
                            borderColor: "black"
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            Text: "Monedas Electronicas"
                        }
                    },
                    scales: {
                        x: {
                            display: true
                        }
                    }
                }
            })
            Valorestbl.innerHTML = "";
            for (const valor of resultado.data.data) {
                let tr = `<tr>
                <td>${valor.symbol}<td>
                <td>${valor.name}<td>
                <td>${parseInt(valor.priceUsd)}<td>
                </tr>`
                Valorestbl.innerHTML += tr;
            }
    })
}

Datos()