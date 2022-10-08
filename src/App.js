import {ProductProvider} from 'context/ProductContext';
import Products from "pages/Products";

//TODO Error boundary, useRef to select inpiut, fetch faker

export default function App() {
  return <ProductProvider><Products /></ProductProvider>;
}
