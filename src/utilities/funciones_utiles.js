import Swal from "sweetalert2";

const confirmacionDeCompra = (id) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `Tu compra, con codigo:" ${id} ", se ha realizado con exito`,
    showConfirmButton: false,
    timer: 4000,
  });
};


export { confirmacionDeCompra };
