
import usersMock from '../mocks/users.json'

const api = {
  fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(usersMock),
        500
      )
    });
  }
}

export default api;