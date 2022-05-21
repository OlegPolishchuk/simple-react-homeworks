import React, {ChangeEvent} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {toggleIsSuccess} from "./bll/requestResucer";

const Request = () => {

    const dispatch = useAppDispatch()
    const isSuccess = useAppSelector(state => state.request.isSuccess)

    const onClickHandler = () => {

    }

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleIsSuccess(e.currentTarget.checked))
    }

    return (
        <div>
            <hr/>
            <h1>Request</h1>
            <SuperCheckbox
                checked={isSuccess}
                onChange={onChangeCheckboxHandler}
            />
            <SuperButton variant={"purple"}
                         onClick={onClickHandler}
            >
                send
            </SuperButton>
        </div>
    );
};

export default Request;