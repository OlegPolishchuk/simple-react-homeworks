import React from 'react'
import ReactSlider from 'react-slider'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void,
    className?: string,
    value?: [number, number],
    min?: number,
    max?: number,
    step?: number,
    disable?: boolean,
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        className,
        onChangeRange,
        value,
        min, max,
        step,
        disable,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const [startValue, endValue] = value ? value : [min ? min : 0, max ? max : 100]
    const disableClassName = disable ? 'disabledTrack' : ''

    const finalClassName = className ? className : 'horizontalSlider'


    return (
        <>
            <ReactSlider
                className={finalClassName}
                thumbClassName={'thumb' +' '+ disableClassName}
                trackClassName={'track'}
                min={min ? min : 0}
                max={max ? max : 100}
                value={[startValue, endValue]}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={0}
                disabled={disable}
                step={step ? step : 1}
                onChange={onChangeRange}
            />
        </>
    )
}

export default SuperDoubleRange
