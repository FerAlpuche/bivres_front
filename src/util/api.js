import axios from "axios";

const SERVER_URL = "http://localhost:3000/";

const instancia = axios.create({
  baseURL: SERVER_URL,
  timeout: 30000,
});

export default {
  async execute(method, resource, data, config) {
    return instancia({
      method: method,
      url: resource,
      data,
      headers: {
        'x-access-token': localStorage.getItem("token")
      },
      config,
    });
  },
  async executePDF(method, resource, data, config) {
    return instancia({
      method: method,
      url: resource,
      responseType: 'arraybuffer',
      data,
      headers: {
        'x-access-token': localStorage.getItem("token")
      },
      config,
    });
  },
  doGet(endPoint) {
    return this.execute("GET", endPoint, null, {
      transformResponse: [
        function(data) {
          return data;
        },
      ],
    });
  },
  doPostPDF(endPoint, object) {
    return this.executePDF("POST", endPoint, object);
  },
  doPost(endPoint, object) {
    return this.execute("POST", endPoint, object);
  },
  doPut(endPoint, object) {
    return this.execute("PUT", endPoint, object);
  },
  doDelete(endPoint) {
    return this.execute("DELETE", endPoint);
  },
};