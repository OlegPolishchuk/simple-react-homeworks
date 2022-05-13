import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const isLoading = useSelector<AppStoreType>(state => state.isLoading.isLoading)
    const dispatch = useDispatch()

    const preload = require('../../assets/img/preloader.gif')
    const preloaderStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }



    const setLoading = () => {

        dispatch(loadingAC(true))

        window.setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };


    return (
        <div className={'container'} style={{minHeight: '160px'}}>
            <hr/>
            homeworks 10

            <div style={{marginTop: '50px'}}>
                {isLoading
                    ? (
                        <div style={preloaderStyles}><img src={preload} alt={'preload'}/></div>
                    ) : (
                        <div>
                            <SuperButton variant={'purple'} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HW10
