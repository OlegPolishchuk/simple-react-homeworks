import React from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./RequestAPI";

const Request = () => {

    const onClickHandler = () => {
        requestAPI.postRequest()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <hr/>
            <h1>Request</h1>
            <SuperCheckbox/>
            <SuperButton variant={"purple"}
                         onClick={onClickHandler}
            >
                send
            </SuperButton>
        </div>
    );
};

export default Request;