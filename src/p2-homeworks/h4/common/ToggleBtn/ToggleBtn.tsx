import React, {useState} from 'react';
import s from "./ToggleBtn.module.css";

type ToggleBtnPropsType = {
    toggle: () => void
    wrapped?: boolean
}

export const ToggleBtn: React.FC<ToggleBtnPropsType> = ({toggle, ...props}) => {

    // const [wrapped, setWrapped] = useState<boolean>(false)

    const onClickHandler = () => {
        // setWrapped(wrapped => !wrapped)
        toggle()
    }

    return (
        <div className={s.menu_bar} onClick={onClickHandler}>
            <div className={`${s.bar} ${s.bar1} ${props.wrapped ? s.change : ''}`}> </div>
            <div className={`${s.bar} ${s.bar2} ${props.wrapped ? s.change : ''}`}> </div>
            <div className={`${s.bar} ${s.bar3} ${props.wrapped ? s.change : ''}`}> </div>
        </div>
    );
};

