import React, {Dispatch} from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import style from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
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

            {mappedAffairs}

            <button className={style.cmn_btn} onClick={() => setAll('all')}>All</button>
            <button className={`${style.cmn_btn} ${style.high}`} onClick={() => setHigh('high')}>High</button>
            <button className={`${style.cmn_btn} ${style.middle}`} onClick={() => setMiddle('middle')}>Middle</button>
            <button className={`${style.cmn_btn} ${style.low}`} onClick={() => setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
