import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../redux/actions/books'


function useBooksLoader(bookstoreService) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks(bookstoreService, dispatch))
  }, [bookstoreService, dispatch])

  const items = useSelector(state => state.books.items )
  let { loading, error } = useSelector(({ books }) => books)

  if (!error && (!items || items.length === 0)) {
    loading = true
  }

  return {
    loading,
    error,
    items
  }
}

export default useBooksLoader
