import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


const themes = ['dark', 'red', 'some', 'default'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.theme.theme)as string // useSelector
    const dispatch = useDispatch()

    console.log(typeof theme)

    // useDispatch, onChangeCallback

    const changeThemeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        dispatch(changeThemeAC(e.currentTarget.value))
    }

    const changeRadioThemeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value))
    }

    return (
        <div className={`${s[theme]} container`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.wrapper}>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChange={changeThemeHandler}
                />

                <div>
                    <SuperRadio
                        options={themes}
                        value={theme}
                        onChange={changeRadioThemeHandler}
                        row
                    />
                </div>
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
