import axios from 'axios';

const BASE_URL = 'https://analizador-codigo-app.herokuapp.com/analizador/api/generar-codigo/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class ApiRest  {


   static analizadorCodigo(data) {

    return axios.post(BASE_URL, data);

    }
}

export default ApiRest