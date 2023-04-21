import axios from "axios";

    // axios para ter acesso em uma api externa
    export const api=axios.create({
    baseURL: 'http://localhost:8001',
})

