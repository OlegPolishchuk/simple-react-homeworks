import React, {useState} from 'react'
import s from './../h4/common/c2-SuperButton/SuperButton.module.css'
import './../../App.css'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
       const state = restoreState<string>('editable-span-value', '')
        setValue(state)
    }


    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={'container'}>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <SuperButton className={`${s.default} ${s.white}`} onClick={save}>save</SuperButton>
                <SuperButton className={`${s.default} ${s.white}`} onClick={restore}>restore</SuperButton>

            </div>
        </div>
    )
}

export default HW6
