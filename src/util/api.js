const SERVER_URL = "http://localhost:8090/";

const instancia = axios.create({
  baseURL: SERVER_URL,
  timeout: 30000,
});

export default {
  doGet(endPoint) {
    return this.execute("GET", endPoint, null, {
      transformResponse: [
        function(data) {
          return data;
        },
      ],
    });
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