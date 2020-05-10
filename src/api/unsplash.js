import Axios from 'axios';

export default Axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID ukG-FyrDgKno2ayAnXHp5nIustM68IUy3kPUwdVOsLs'
    }
});