function Datos () {
    const grafico = document.getElementById("Chart").getContext("2d")
    axios.get("https://api.coincap.io/v2/assets").then(resultado => {
            console.log('================================');
            console.log(resultado);
            console.log('================================');
    })
}

Datos()