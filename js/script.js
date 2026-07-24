/* ==========================================================
   MODAL
========================================================== */

/*
    Abre la ventana de reserva.
*/
function openModal() {

    document
        .getElementById("modal")
        .classList
        .add("active");

}


/*
    Cierra la ventana de reserva.
*/
function closeModal() {

    document
        .getElementById("modal")
        .classList
        .remove("active");

}