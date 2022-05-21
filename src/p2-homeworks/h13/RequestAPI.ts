import axios from "axios";

const testPostBody = {
    success: false
}

export const requestAPI = {
    postRequest() {
        return axios
            .post('https://neko-cafe-back.herokuapp.com/auth/test', testPostBody)
    }
}