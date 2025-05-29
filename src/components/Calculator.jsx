import Screen from './Screen'
import Commands from './Commands/Commands'

const Calculator = () => {    
    return (
        <div className="w-80 inline-block my-8">
            <Screen screenValue={"150 + 252"} />
            <Commands/>
        </div>
    )
}

export default Calculator; 
