
import useProductContext from './hooks/useProductContext';

export default function SaveProducts() {

  const {
  state,
  handleChange,
  handleProducts
} = useProductContext();

  const {productName, quantity} = state.product;

  const canSave = /[A-Za-z][\w.\s]/.test(productName) && /\d+$/.test(quantity);

  return (

      <div className="flex-row flex-end">
        <div className="flex-col">
          <label>Product</label>
          <input
            name="productName"
            type="text"
            pattern="[A-Za-z][\w.\s]"
            value={productName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label>Quantity</label>
          <input
            name="quantity"
            type="text"
            pattern="\d+$"
            value={quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" name="save" className="button" disabled={!canSave} onClick={handleProducts}>
          Save
        </button>
      </div>

  );
}
