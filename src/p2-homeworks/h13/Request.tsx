import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./RequestAPI";

export const Request = () => {
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false)
    const sendRequest = () => {
        requestAPI.sendPostRequest(checkboxValue)
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response ? error.response.data.errorText : error.message))
    }
    return (
        <div>
            <SuperButton onClick={sendRequest}>send</SuperButton>
            <input type='checkbox' onChange={(e) => {setCheckboxValue(e.currentTarget.checked)}} checked={checkboxValue}/>
        </div>
    );
};

