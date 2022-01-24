import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.withCredentials = true;


const fetcher = async (url) => axios.get(url)
                                    .then((result) => result.data)
                                    .catch((error) => console.log(error.response));

export default fetcher;
