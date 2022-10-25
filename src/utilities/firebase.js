import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommerce-react-pf-lezama.firebaseapp.com",
  projectId: "ecommerce-react-pf-lezama",
  storageBucket: "ecommerce-react-pf-lezama.appspot.com",
  messagingSenderId: "335523261776",
  appId: "1:335523261776:web:681380f93b27a4e20ed055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBaseDeDatos = async () => {
  const promise = await fetch("https://dummyjson.com/products");
  const productos = await promise.json();
  productos.products.forEach(async (producto) => {
    await addDoc(collection(db, "products"), {
      brand: producto.brand,
      category: producto.category,
      description: producto.description,
      id: producto.id,
      images: producto.images,
      price: producto.price,
      rating: producto.rating,
      stock: producto.stock,
      thumbnail: producto.thumbnail,
      title: producto.title,
    });
  });
};

const getProductos = async () => {
  const productos = await getDocs(collection(db, "products"));
  const items = productos.docs.map((producto) => [
    producto.id,
    producto.data(),
  ]);
  return items;
};

const getProducto = async (id) => {
  const producto = await getDoc(doc(db,"products", id));
  return producto
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "products", id), info);
  return estado;
};

export { cargarBaseDeDatos, getProductos, updateProducto, getProducto };
