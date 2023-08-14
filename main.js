const tblValores = document.getElementById("tblValores") 

function Datos () {
    const grafico = document.getElementById("myChart").getContext("2d")
    axios.get("https://api.coincap.io/v2/assets").then(resultado => {
            const etiquetas = resultado.data.data.map(item => {
                return item.name.toUpperCase();
            })
            Valorestbl.innerHTML = "";
            for (const valor of resultado.data.data) {
                if (parseInt(valor.priceUsd) > 100) {
                    let tr = `<tr>
                    <td>${valor.symbol}<td>
                    <td>${valor.name}<td>
                    <td>${parseInt(valor.priceUsd)}<td>
                    </tr>`
                    Valorestbl.innerHTML += tr;
                }
            }
    })
}

Datos()