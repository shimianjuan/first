export default {
  changeCity (state, city) {
    state.city = city; //state.city等于传入的city
    try {
      localStorage.city = city
    } catch (e) {

    }
  }
}
