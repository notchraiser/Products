import { createContext, useReducer } from 'react';

const ProductContext = createContext({});
  const initialState = {
    data: [{ productName: "Apple", quantity: "100" }, { productName: "Mango", quantity: "200" }],
    product: { productName: "", quantity: "" },
    id: null,
  }

  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_DATA': return {...state, data: action.payload};
      case 'SET_PRODUCT': return {...state, product: action.payload};
      case 'SET_ID':  return {...state, id: action.payload};
      default: return state;
    }
  }

export const ProductProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value =
      type === "checkbox" ? e.target.checked : e.target.value.toUpperCase();
    dispatch({type: 'SET_PRODUCT', payload: { ...state.product, [name]: value }});
  };

  const handleProducts = (e) => {
    const logic = e.target.name || "";
    const index = e.target?.id || -Infinity;
    switch (logic) {
      case "edit" : 
        if(index !== -Infinity && index >=0) {
          dispatch({type: 'SET_PRODUCT', payload: state.data[index]});
          dispatch({type: 'SET_ID', payload: index});
          break;
        }
        break;
      case "delete": 
        if(index !== -Infinity && index >=0) {
          state.data.splice(index, 1);
          dispatch({type: 'SET_DATA', payload: [...state.data]});
          dispatch({type: 'SET_ID', payload: null});
        }
        break; 
      
      case "save": 
        e.preventDefault();
        if(state.id) {
          state.data[state.id] = state.product;
          dispatch({type: 'SET_DATA', payload: state.data});
          dispatch({type: 'SET_ID', payload: null});;
        }
        else{
          dispatch({type: 'SET_DATA', payload: [state.product, ...state.data]});
        }
        dispatch({type: 'SET_PRODUCT', payload: initialState.product});
        break;
      default: break;
    }

  };

  // const canSave = [...Object.values(product)].every(Boolean);

  return (
    <ProductContext.Provider value={{state, handleChange, handleProducts}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;