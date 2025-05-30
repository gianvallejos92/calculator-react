import Screen from './Screen'
import Commands from './Commands/Commands'
import { useContext } from 'react'
import { GeneralContext } from '../context/generalContext'

const Calculator = () => {   
    const { state } = useContext(GeneralContext);
    const screenValue = state.screenValue;
    
    return (
        <div className="w-80 inline-block my-8">
            <Screen screenValue={screenValue} />
            <Commands/>
        </div>
    )
}

export default Calculator; 
