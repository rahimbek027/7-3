import React from 'react';
import { Select } from 'antd';

const CustomSelect = ({placeholder, width, option, setChooseId, setIsLoading, setLebalValue}) => {
    const onChange = (value, obj) => {
        console.log(obj);
        
        if(setIsLoading){
            setIsLoading(true)
            value ? setTimeout(() => setChooseId(`${value}`), 800) : setTimeout(() => setChooseId(``), 800)

        }
        if(setLebalValue){
            setLebalValue(obj.label)
            setChooseId(value)
        }
        else{
            setChooseId(value)
        }
        
    };
    
    return (
        <Select
            style={{width: `${width}`}}
            size='large'
            allowClear
            showSearch
            placeholder={placeholder}
            optionFilterProp="label"
            onChange={onChange}
            options={option}
        />
    )
};
export default CustomSelect;

