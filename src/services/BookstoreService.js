export default class BookstoreService {
  data = [{
    id: 1,
    title: 'JavaScript The Good Parts',
    author: 'Douglas Crockford',
    price: 15,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
  }, {
    id: 2,
    title: 'The Road to React',
    author: 'Robin Wieruch',
    price: 10,
    imageUrl: 'https://m.media-amazon.com/images/I/31apmbgpwkL.jpg'
  }, {
    id: 3,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    price: 12,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg'
  }]

  cacheExpire = new Date()
  cacheLife = 5 * 1000

  getBooks() {
    return new Promise(( resolve, reject ) => {

      // return cached data
      if (new Date() - this.cacheExpire < this.cacheLife) {
        resolve(this.data)
        return
      }

      setTimeout(() => {
        if (Math.random() < 0.9) {
          this.cacheExpire = new Date()
          resolve(this.data)
        } else {
          reject('Bookstore service error')
        }
      }, 200)
    })
  }

  getBook(id) {
    return {
      id
    }
  }
}
