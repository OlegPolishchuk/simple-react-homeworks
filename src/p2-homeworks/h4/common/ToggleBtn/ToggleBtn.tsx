import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from "./ToggleBtn.module.css";

// type ToggleBtnPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ToggleBtnPropsType = {
    onChange: () => void
}
export const ToggleBtn: React.FC<ToggleBtnPropsType> = (
    {
        // type,
        onChange
    }
) => {

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e)
    // }
    const [toggle, setToggle] = useState<boolean>(false)

    const onClickHandler = () => {
        setToggle(toggle => !toggle)
    }

    return (
        // <div className={s.toggle_btn} >
        //     <input
        //         className={s.checkbox}
        //         type={"checkbox"}
        //         onChange={onChangeHandler}
        //     />
        //     <div className={s.hamburger_lines}>
        //             <span className={`${s.line} ${s.line1}`}>
        //
        //             </span>
        //         <span className={`${s.line} ${s.line2}`}>
        //
        //             </span>
        //         <span className={`${s.line} ${s.line3}`}>
        //
        //             </span>
        //     </div>
        // </div>
        <div className={s.menu_bar} onClick={onClickHandler}>
            <div id="bar1" className={`${s.bar} ${s.bar1} ${toggle ? s.change : ''}`}> </div>
            <div id="bar2" className={`${s.bar} ${s.bar2} ${toggle ? s.change : ''}`}> </div>
            <div id="bar3" className={`${s.bar} ${s.bar3} ${toggle ? s.change : ''}`}> </div>
        </div>
    );
};

