// Создайте React-компонент, который будет функционировать как простой калькулятор
// Компонент должен иметь кнопки для ввода чисел и операций (+, -, *, /)
// При вводе выражения и нажатии кнопки "Рассчитать", компонент должен вычислить результат и отобразить его

import styles from './Calculator.module.css'

import useCalculator from "./hooks/useCalculator"
import { createContext } from "react";

import Keypad from "./Keypad";


export const CalculatorContext = createContext();

const BUTTONS_CONFIG = [
    { label: 'C', type: 'clear', styleKey: 'clear' },
    { label: '<-', type: 'backspace', styleKey: 'backspace' },
    { label: '/', type: 'operator', styleKey: 'operator' },
    { label: '*', type: 'operator', styleKey: 'operator' },

    { label: '7', type: 'digit' },
    { label: '8', type: 'digit' },
    { label: '9', type: 'digit' },
    { label: '-', type: 'operator', styleKey: 'operator' },

    { label: '4', type: 'digit' },
    { label: '5', type: 'digit' },
    { label: '6', type: 'digit' },
    { label: '+', type: 'operator', styleKey: 'operator' },

    { label: '1', type: 'digit' },
    { label: '2', type: 'digit' },
    { label: '3', type: 'digit' },
    { label: '=', type: 'execute', styleKey: 'equal' },

    { label: '0', type: 'digit', styleKey: 'zero' }, 
];


export default function Calculator(){
    const {firstValue, secondValue, operator, execute, clear, backspace, handleDigit, handleOperator} = useCalculator();
    

    return(
        <div className={styles.calculator}>
            <div className={styles.display}>
                <span className={styles.operand}>{firstValue}</span>
                <span className={styles.operand}>{operator}</span>
                <span className={styles.operand}>{secondValue}</span>
            </div>
            <CalculatorContext.Provider value={{BUTTONS_CONFIG, execute, clear, backspace, handleDigit, handleOperator}} >
                <Keypad />
            </CalculatorContext.Provider>
        </div>
    )
}