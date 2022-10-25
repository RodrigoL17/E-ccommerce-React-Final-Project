import Swal from "sweetalert2";

const confirmacionDeCompra = (id) => {
  Swal.fire({
    position: "center",
    icon: "success",
    iconColor:"#099a00",
    title: `Muchas gracias por elegirnos!!`,
    footer:`Tu compra, codigo:" ${id} ", se ha realizado con exito`,
    showConfirmButton: false,
    timer: 4000,
    background: "#ddffdd",
    color: "#000000"
  });
};


export { confirmacionDeCompra };
