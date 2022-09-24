import useProductContext from './hooks/useProductContext';

const ListProducts = () => {

  const { state, handleProducts } = useProductContext();
  const { data } = state;
  return (
    <>
      {data?.map((item, index) => (
          <div key={index} className="flex-row bg-white">
            <div>{item?.productName}</div>
            <div>
              <div className="flex-row">
                <div>{item?.quantity}</div>
                <div>
                  <button type="button" id={index} name="edit" className="button" onClick={handleProducts}>
                    Edit
                  </button>
                  <button type="button" id={index} name="delete" className="button" onClick={handleProducts}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ListProducts;
