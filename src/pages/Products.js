import ListProducts from "components/ListProducts";
import SaveProducts from "components/SaveProducts";
import ErrorBoundary from "components/ErrorBoundary";

const Products = () => {
  return (
    <main className="container">
      <header>PRODUCTS</header>
      <section className="flex-col">
        <ErrorBoundary>
          <SaveProducts />
        </ErrorBoundary>
        <ErrorBoundary>
          <ListProducts />
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default Products;
