import React from 'react'
import style from './Affairs.module.css';
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // fixed
    deleteAffairCallback: (id:number) => void
}


function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    return (
        <div className={style.item}>
            <p className={style.name}>{props.affair.name}</p>
            <p className={style[`${props.affair.priority}`]}>{props.affair.priority}</p>
            <SuperButton className={style.btn_delete} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
