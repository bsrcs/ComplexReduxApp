import * as actionTypes from "./actionTypes"

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

///////////////////// KATEGORILERI LISTELE ///////////////////////
export function getCategoriesSuccess(categories) {
  // Reducer' a soyle dersin:
  // Bende GET_CATEGORIES_SUCCESS aksiyonu var, o aksiyon icin yeni state'in categories olacak.
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

export function getCategories() {
  // API'ye baglanma gibi asenkron operasyonlarda Thunk kullaniriz.
  // dispatch parametresi ile kendimi yukardaki "type","payload" yapisina hazirliyorum.
  // apiye baglanma gibi asenkron operasyonlarda redux thunk kullanilir.
  // getCategories icersinde ayri bir fonsiyon dondurur.
  return function (dispatch) {
    // API'ye baglanmam gerek.
    let url = "http://localhost:3000/categories"
    // then ile bir response gelecek
    // gelen response'u json'a cevir. Response her zaman stringtir.
    // her then bir onceki then'in cikardigi sonucla ilgilenir.
    // getCategoriesSuccess, Redux'in anlayacagi sekilde sonuc dondurur.
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result))) 
  }
}
