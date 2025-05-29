import SquareBtn from './SquareBtn'
import values from './values.json'

const Commands = () => {    
    return (
        <div className="grid grid-cols-4 border-t border-l border-black text-white">
            {
               values.map(curValue => 
                    <SquareBtn 
                        item={curValue} 
                        key={curValue.value} 
                    /> 
               )
            }
        </div>
    )
}

export default Commands;
