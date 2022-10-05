
    

const consultarAPI = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data  = await response.json();
    return data.products
}
 export {consultarAPI}

