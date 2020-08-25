import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products){
  return {
    type:actionTypes.GET_PRODUCTS_SUCCESS,
    payload:products
  }
}

// secili urunun id'sini parametre olarak al.
export function getProducts(categoryId){
  return function(dispatch){
    let url="http://localhost:3000/products"
    // kullanici bir categoryId gonderirse(=defined)
    // su url'i getir
    if(categoryId){
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
    .then(response => response.json())
    .then(response => dispatch(getProductsSuccess(response)))
  }
}