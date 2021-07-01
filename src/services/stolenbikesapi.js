export default class StolenBike {
  static getStolenBike(city, distance){
    return fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=${distance}&stolenness=proximity`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    })
  }
}