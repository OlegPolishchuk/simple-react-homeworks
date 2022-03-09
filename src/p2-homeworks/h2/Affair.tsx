import React from 'react'
import style from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // fixed
    deleteAffairCallback: (id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id);
        console.log(id)
    }// need to fix

    return (
        <div className={style.item}>
            <p className={style.name}>{props.affair.name}</p>
            <p className={style[`${props.affair.priority}`]}>{props.affair.priority}</p>
            <button className={style.btn_delete} onClick={ ()=>deleteCallback(props.affair._id) }>X</button>
        </div>
    )
}

export default Affair
