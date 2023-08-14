function Datos () {
    const grafico = document.getElementById("Chart").getContext("2d")
    axios.get("https://api.coincap.io/v2/assets").then(resultado => {
            const etiquetas = resultado.data.data.map(item => {
                return item.name.toUpperCase();
            })

            //valores a comparar
            const precio = resultado.data.data.map(item => {
                return parseInt(item.priceUsd)
            })

            console.log(precio);
            console.log(etiquetas);
    })
}

Datos()