import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import superDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)

    const superDoubleRangeOnChangeHandler = (values: [number, number]) => {
        setValue1(values[0]);
        setValue2(values[1])
    }

    const style = {
        marginTop: '50px',
        maxWidth: '90%'
    }

    return (
        <div className={'container'}>
            <hr/>
            homeworks 11
            <div style={style}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChange={(e) => setValue1(+e.currentTarget.value)}
                />
            </div>

            <div style={style}>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={superDoubleRangeOnChangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>
        </div>
    )
}

export default HW11
