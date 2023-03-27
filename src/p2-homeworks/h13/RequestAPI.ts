import axios from "axios";

export const requestAPI = {
    postRequest(success: boolean) {
        return axios
            .post('https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test', {
                success
            })
    }
}