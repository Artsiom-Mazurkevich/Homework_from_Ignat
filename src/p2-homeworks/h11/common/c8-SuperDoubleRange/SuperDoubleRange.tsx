import React, {ChangeEvent} from 'react'
import {RangeSlider} from "@mantine/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    max: number
    min: number
    className?: string
    onChangeRangeDouble?: (value: [number, number]) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (

    {
        onChangeRange, value,
         min, max,onChangeRangeDouble
    }
) => {
    // сделать самому, можно подключать библиотеки
    /*const onChangeCallback = (value: number) => {
        onChangeRange && onChangeRange([value, max])
    }*/

    const handler = (value: [number, number]) => {
        if (value[1] === value[0]) {
            return
        }
        onChangeRangeDouble && onChangeRangeDouble([value[0], value[1]])
    }

    return (
        <>
            <RangeSlider onChange={handler} defaultValue={[min, max]} value={[min, max]} style={{width:'350px'}} step={1} minRange={0} />
            {/*<RangeSlider value={[min, max]} style={{width:'129px'}}/>*/}
        </>
    )
}

export default SuperDoubleRange
