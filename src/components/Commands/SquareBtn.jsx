import { useContext } from 'react'

import { GeneralContext } from '../../context/generalContext'

import Divide from '../Icons/Divide'
import Multiply from '../Icons/Multiply'
import Rest from '../Icons/Rest'
import Plus from '../Icons/Plus'
import Equal from '../Icons/Equal'

const operationMap = {
    'divide': <Divide />,
    'multiply': <Multiply />,
    'rest': <Rest />,
    'plus': <Plus />,
    'equal': <Equal />
}

const valueTypeMap = {
    'number': 'NUMBER_ACTION',
    'operator': 'OPERATOR_ACTION'
}

const heightStyle = "h-16 text-2xl ";
const flexStyle = "flex justify-center items-center ";
const borderStyle = "border-r border-b border-black ";

const SquareBtn = ({item}) => {
    const { dispatch } = useContext(GeneralContext);
    const handleOnClick = () => {
        dispatch({ 
            type: valueTypeMap[item.type],
            value: item.value 
        });
    };

    const colspanStyle = (item.colSpan != 1) ? " col-span-2 " : "";
    return (
        <button className={colspanStyle} onClick={handleOnClick}>
            <div className={heightStyle + flexStyle + borderStyle + item.bgColor }>
                { 
                    (operationMap[item.value]) ? operationMap[item.value] : item.value
                }
            </div>
        </button>
    )
}

export default SquareBtn;
