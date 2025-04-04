import axios from 'axios';

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (path, option = {}) => {
    const reponse = await request.get(path, option);
    return reponse.data;
};

export default request;
