import { useEffect } from "react";
import axios from "apis/axios";
import useProductContext from "hooks/useProductContext";
import useAxiosFunction from "hooks/useAxiosFunction";

export default function SaveProducts() {

  const [response, loading, error, axiosFetch] = useAxiosFunction();
  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      url: '/posts',
      method: 'GET',
    })
  }

  useEffect(() => {
    getData()
    //eslint-disable-next-line
  }, [])
  
  const { state, handleChange, handleProducts } = useProductContext();
  const { productName, quantity } = state.product;

  const canSave = /[A-Za-z][\w.\s]/.test(productName) && /\d+$/.test(quantity);

  return (
    <>
      <div className="flex-row flex-end">
        <div className="flex-col">
          <label>Product</label>
          <input
            name="productName"
            type="text"
            autoComplete="off"
            pattern="[A-Za-z][\w.\s]"
            value={productName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label>Quantity</label>
          <input
            name="quantity"
            autoComplete="off"
            type="text"
            pattern="\d+$"
            value={quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          name="save"
          className="button"
          disabled={!canSave}
          onClick={handleProducts}
        >
          Save
        </button>
      </div>
      <br />
    </>
  );
}
