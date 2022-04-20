import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type VariantType = 'red' | 'white' | 'purple'
type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean,
    variant? : VariantType
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        variant,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let finalClassName;
    switch (variant) {
        case 'white':
            finalClassName = s.white
            break
        case 'red':
            finalClassName = s.red
            break
        case 'purple':
            finalClassName = s.purple
            break
        default:
            finalClassName = s.default
    }

    // const finalClassName = `${red ? s.red : className? className : s.default}`

    return (
        <button
            className={red ? s.red : finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
