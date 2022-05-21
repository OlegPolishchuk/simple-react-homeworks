import React, {ChangeEvent} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {toggleIsSuccess} from "./bll/requestResucer";
import s from './Request.module.css'

const Request = () => {

    const dispatch = useAppDispatch()
    const isSuccess = useAppSelector(state => state.request.isSuccess)

    let responseText;

    const onClickHandler = () => {

    }

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleIsSuccess(e.currentTarget.checked))
    }

    const spanText = `{success: ${isSuccess}}`;

    return (
        <div className={s.wrapper}>
            <div>
                <span>{spanText}</span>
                <SuperCheckbox
                    checked={isSuccess}
                    onChange={onChangeCheckboxHandler}
                />
            </div>
            <div>
                <SuperButton variant={"purple"}
                             onClick={onClickHandler}
                >
                    send
                </SuperButton>
            </div>
            <pre>

            </pre>
        </div>
    );
};

export default Request;