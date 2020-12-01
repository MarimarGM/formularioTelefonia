function mostrarValoracion() {
    const valor = document.getElementById('valoracion').value
    alert("Has valorado con " + valor + " puntos.")
}

function mostrarCuenta() {
    const pais = document.getElementById('es').value
    const iban = document.getElementById('iban').value
    const entidad = document.getElementById('ent').value
    const sucursal = document.getElementById('suc').value
    const dc = document.getElementById('dc').value
    const cuenta = document.getElementById('cuen').value
    alert("Le informamos que su cuenta bancaria es: " + pais + iban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta)


}

function onlyNumberKey(evt) {

    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function mostrarDia() {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dia = document.getElementById('day').value
    const date = new Date(dia);
    alert("La fecha seleccionada en el elemento de fecha es un " + dias[date.getDay()])

}