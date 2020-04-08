const localStateName = 'bookstore-state'

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStateName)
    if (!serializedState) {
      return
    }
    return JSON.parse(serializedState)
  } catch (error) {
  }
}

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(localStateName, serializedState)
  } catch (error) {
  }
}
