
import * as fromReducer from '../reducers/product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProductState = createFeatureSelector<fromReducer.State>('product'); // lazy loading compatibel

export const getProductLoading = createSelector(
    getProductState,
    productState => productState.loading,
);

export const getAllProducts = createSelector(
    getProductState,
    productState => productState.products
);