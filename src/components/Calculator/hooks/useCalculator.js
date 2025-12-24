import useLocalStorage from "./useLocalStorage";


export default function useCalculator()
{
    const [firstValue, setFirstValue] = useLocalStorage('firstValue', '0');
    const [secondValue, setSecondValue] = useLocalStorage('secondValue', '');
    const [operator, setOperator] = useLocalStorage('operator', '');

    function execute() {
        const result = calculate(parseFloat(firstValue), parseFloat(secondValue));
        if(isNaN(result)) return;

        setFirstValue(result);
        setOperator('');
        setSecondValue('');
    }

    function clear() {
        setFirstValue('0');
        setOperator('');
        setSecondValue('');
    }

    function backspace() {
        if(operator !== '')
        {
            if(secondValue !== '')
            {
                setSecondValue(prev => prev.slice(0, -1));
            }
            else
            {
                setOperator('');
            }
        }

        else
        {
            setFirstValue(prev => prev.slice(0, -1));
        }
    }

    function handleDigit(digit) {
        if(operator === '')
        {
            firstValue === '0' ? setFirstValue(digit) : setFirstValue(firstValue + digit);
        }

        else
        {
            if(secondValue === '' || secondValue === '0')
            {
                setSecondValue(digit);
            }
            else
            {
                setSecondValue(secondValue + digit);
            }
        }
    }

    function handleOperator(operator) {
        setOperator(operator);
    }


    // === Вспомогательные функции ===
    
    // Выполнение операции
    function calculate(firstNumber, secondNumber){
        let result = 0;
        switch(operator){
            case '+': result = firstNumber + secondNumber; break;
            case '-': result = firstNumber - secondNumber; break;
            case '/': result = firstNumber / secondNumber; break;
            case '*': result = firstNumber * secondNumber; break;
            default: return;
        }

        return String(result);
    }

    return {firstValue, secondValue, operator, execute, clear, backspace, handleDigit, handleOperator};
}