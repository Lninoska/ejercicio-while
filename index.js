let animales = [ "gato", "perro", "conejo","león", "elefante", "ratón", "hamster" ]

function esperar(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}

async function eliminando() {
    while(animales.length > 0) {
        let eliminado = animales.pop()
        console.log(`Se eliminó ${eliminado}`)
        await esperar (2000)
    }
    console.log("El array animales esta vacío")
}
eliminando()