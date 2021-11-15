const baseURL = 'http://localhost:3000';

class API {
  static fetchApart = (success, failure) => {
    
      fetch(`${baseURL}/apartments`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
    
  }
  static deleteApartment = (id, success, failure) => {
    fetch(`${baseURL}/apartments/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? success() : failure(res.statusText))
      .catch(failure)
  }
}
