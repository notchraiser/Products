import ListProducts from "components/ListProducts";
import SaveProducts from "components/SaveProducts";
import ErrorBoundary from "components/ErrorBoundary";
import GetPreviousValue from "components/GetPreviousValue";
import Timer from "components/Timer";

const Products = () => {
  return (
    <main className="container">
      <header>PRODUCTS</header>
      <section className="flex-col">
        <ErrorBoundary>
          <Timer />
        </ErrorBoundary>
        <ErrorBoundary>
          <SaveProducts />
        </ErrorBoundary>
        <ErrorBoundary>
          <ListProducts />
        </ErrorBoundary>
        <ErrorBoundary>
          <GetPreviousValue />
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default Products;
