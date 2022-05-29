import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeMyThemeC, changeThemeC} from "./bll/themeReducer";
import {ColorInput} from "@mantine/core";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.colorTheme.theme)
    const myTheme = useSelector<AppStoreType>(state => state.myColorTheme.theme)
    //const theme = 'some'; // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const changeMode = (color: string) => {
        dispatch(changeThemeC(color))
    }


    const [pickColor, setPickColor] = useState('')
    const onChangeHandlerColor = (color: string) => {
        setPickColor(color)
        dispatch(changeMyThemeC(color))
    }

    return (
        <div>
            <div className={s[theme + '']}>
                <hr/>
                <span className={s[theme + '-text']} style={{marginRight: '20px'}}>
                homeworks 12
            </span>

                {/*should work (должно работать)*/}
                <SuperSelect options={themes} onChangeOption={changeMode}/>
                </div>

                <div style={{backgroundColor: myTheme + ''}}>
                    <ColorInput placeholder="Pick color"
                                label="Your favorite color"
                                style={{width: '200px'}}
                                value={pickColor} onChange={onChangeHandlerColor}/>
                </div>
                <hr/>

        </div>
    );
}

export default HW12;
