import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    deleteAffairCallback: (id:number) => void,
    setFilter: (filter: FilterType)=> void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const {filter} = props;
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (filter: FilterType) => {props.setFilter(filter)} // fixes
    const setHigh = (filter: FilterType) => {props.setFilter(filter)} // fixed
    const setMiddle = (filter: FilterType) => {props.setFilter(filter)} // fixed
    const setLow = (filter: FilterType) => {props.setFilter(filter)} // fixed

    return (
        <div className={style.wrapper}>

            <div>
                {mappedAffairs}
            </div>

            <div className={style.controls}>
                <SuperButton
                    className={`${style.cmn_btn} ${filter === 'all' ? style.active : ''}`}
                    onClick={() => setAll('all')}
                > All
                </SuperButton>
                <SuperButton
                    className={`${style.cmn_btn} ${style.high} ${filter === 'high' ? style.active: ''}`}
                    onClick={() => setHigh('high')}
                >High
                </SuperButton>
                <SuperButton
                    className={`${style.cmn_btn} ${style.middle} ${filter === 'middle' ? style.active : ''}`}
                    onClick={() => setMiddle('middle')}
                >Middle
                </SuperButton>
                <SuperButton
                    className={`${style.cmn_btn} ${style.low} ${filter === 'low' ? style.active : ''}`}
                    onClick={() => setLow('low')}
                >Low
                </SuperButton>
            </div>
        </div>
    )
}

export default Affairs
