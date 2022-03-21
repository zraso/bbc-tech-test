import axiosInstance from 'axios';

class DAO {
  async getHeadlines(country: string) {
    const headlines = await axiosInstance.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7ec1b6572dde4dd2b1ccadbb293a1ac0`)
   
    if (headlines.data) {
      return headlines.data.articles
    }
  }
}

const DataAccessObject = new DAO();
export default DataAccessObject;