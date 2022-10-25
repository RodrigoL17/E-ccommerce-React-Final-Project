import Swal from "sweetalert2";
// const consultarAPI = async () => {
//     const response = await fetch("https://dummyjson.com/products");
//     const data  = await response.json();
//     return data.products
// }
//  export {consultarAPI}

const confirmacionDeCompra = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Tu compra se ha realizado con exito",
    showConfirmButton: false,
    timer: 2500,
  });
};


export { confirmacionDeCompra };
