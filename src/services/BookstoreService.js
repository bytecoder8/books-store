export default class BookstoreService {
  data = [{
    id: 1,
    title: 'JavaScript The Good Parts',
    author: 'Douglas Crockford',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
  }, {
    id: 2,
    title: 'The Road to React',
    author: 'Robin Wieruch',
    imageUrl: 'https://m.media-amazon.com/images/I/31apmbgpwkL.jpg'
  }, {
    id: 3,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg'
  }]

  getBooks() {
    return new Promise(( resolve, reject ) => {
      setTimeout(() => {
        resolve(this.data)
      }, 200)
    })
  }

  getBook(id) {
    return {
      id
    }
  }
}
