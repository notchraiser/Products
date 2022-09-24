
import ListProducts from "./ListProducts";
import SaveProducts from "./SaveProducts";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";

const Products = () => {

  return (
    <div className="container">
      <header>PRODUCTS</header>
      <div className="flex-col">
        <ErrorBoundary>
          <SaveProducts />
        </ErrorBoundary>
        <ErrorBoundary>
          <ListProducts />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Products;
