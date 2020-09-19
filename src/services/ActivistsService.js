import http from '../utils/http'

class ActivistsService {

  fetchActivists = async () => {
    try {
      const response = await http.get('?_limit=10');
      if (response.status === 200) {
        return response.data
      }
    } catch(error) {
      return error
    }
  }

}

export default ActivistsService