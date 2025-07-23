import axios from "axios";

export default axios.create({
    baseURL: "https://proxy.corsfix.com/?https://www.freetogame.com/api",
});
