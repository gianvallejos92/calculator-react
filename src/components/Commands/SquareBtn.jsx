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

const heightStyle = "h-16 text-2xl ";
const flexStyle = "flex justify-center items-center ";
const borderStyle = "border-r border-b border-black ";

const SquareBtn = ({item}) => {
    const colspanStyle = (item.colSpan != 1) ? " col-span-2 " : "";
    return (
        <button className={colspanStyle}>
            <div className={heightStyle + flexStyle + borderStyle + item.bgColor }>
                { 
                    (operationMap[item.value]) ? operationMap[item.value] : item.value
                }
            </div>
        </button>
    )
}

export default SquareBtn;
