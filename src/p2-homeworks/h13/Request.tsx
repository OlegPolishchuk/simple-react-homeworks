import React, {ChangeEvent} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {thunkMakePostRequest, toggleIsSuccess} from "./bll/requestResucer";
import s from './Request.module.css'

const Request = () => {
    const dispatch = useAppDispatch()
    const isSuccess = useAppSelector(state => state.request.isSuccess)
    const response = useAppSelector(state => state.request.response)
    const isLoading = useAppSelector(state => state.request.isLoading)

    const onClickHandler = () => {
        dispatch(thunkMakePostRequest(isSuccess))
    }

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleIsSuccess(e.currentTarget.checked))
    }

    const spanText = `{success: ${isSuccess}}`;

    const responseText = response &&
        (<>
            <p>status: <span className={s.responseNumber}>{response.status}</span></p>
            <p>statusText: <span>{response.statusText}</span></p>
            <p>data: &#123; </p>
            <p style={{marginLeft: '10px'}}>errorText: <span>{response.data.errorText}</span></p>
            <p style={{marginLeft: '10px'}}>info: <span>{response.data.info}</span></p>
            <p>&#125;</p>
        </>)

    return (
        <div className={s.wrapper}>
            <div className={s.controls}>
                <div className={s.checkBox}>
                    <SuperCheckbox
                        checked={isSuccess}
                        onChange={onChangeCheckboxHandler}
                    />
                    <span>{spanText}</span>
                </div>
                <div>
                    <SuperButton variant={"purple"}
                                 onClick={onClickHandler}
                                 disabled={isLoading}
                    >
                        send
                    </SuperButton>
                </div>
            </div>
            <div>
               <pre className={s.response}>
                {responseText}
            </pre>
            </div>

        </div>
    );
};

export default Request;