import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type VariantType = 'red' | 'white' | 'purple' | 'outline'
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
    let btnVariant;
    switch (variant) {
        case 'white':
            btnVariant = s.white
            break
        case 'red':
            btnVariant = s.red
            break
        case 'purple':
            btnVariant = s.purple
            break
        case 'outline':
            btnVariant = s.outline
            break
        default:
            btnVariant = s.default
    }

    // const finalClassName = `${red ? s.red : className? className : s.default}`
    const finalClassName = className ? className : s.default

    return (
        <button
            className={red ? s.red : variant ? btnVariant : className ? className : finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
