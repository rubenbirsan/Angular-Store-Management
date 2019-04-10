import { Action } from '@ngrx/store';
import { Product } from '../product'
import { ProductActionTypes, ProductActions } from '../actions/product.actions';


export interface State {
  products: Product[];
  loading: boolean;
}

export const initialState: State = {
    products: [],
    loading: false,
};

export function reducer(state: State  = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.LoadProducts:{
      return{
        ...state,
        loading: true        
      };
    } 

    case ProductActionTypes.LoadProductsSuccess: {
      const products = action.payload.products;
      return {
        ...state,
        loading: false,
        products
      };
    }

    case ProductActionTypes.LoadProductsFail: {
      return {
        ...state,
        loading: false,
        products: []
      };
    }
  
    default:
      return state;
  }
}
