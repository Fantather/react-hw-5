// Создайте React-компонент, который будет функционировать как простой калькулятор
// Компонент должен иметь кнопки для ввода чисел и операций (+, -, *, /)
// При вводе выражения и нажатии кнопки "Рассчитать", компонент должен вычислить результат и отобразить его

import styles from './Calculator.module.css'

import useCalculator from "./hooks/useCalculator"
import { createContext } from "react";

import Keypad from "./Keypad";


export const CalculatorContext = createContext();

const BUTTONS_CONFIG = [
    // 1-й ряд: Очистка и верхние операции
    { label: 'C', type: 'clear', styleKey: 'clear' },
    { label: '<-', type: 'backspace', styleKey: 'backspace' },
    { label: '/', type: 'operator', styleKey: 'operator' },
    { label: '*', type: 'operator', styleKey: 'operator' },

    // 2-й ряд: Цифры 7-8-9 и Минус
    { label: '7', type: 'digit' },
    { label: '8', type: 'digit' },
    { label: '9', type: 'digit' },
    { label: '-', type: 'operator', styleKey: 'operator' },

    // 3-й ряд: Цифры 4-5-6 и Плюс
    { label: '4', type: 'digit' },
    { label: '5', type: 'digit' },
    { label: '6', type: 'digit' },
    { label: '+', type: 'operator', styleKey: 'operator' },

    // 4-й ряд: Цифры 1-2-3 и Равно (которое может быть высоким)
    { label: '1', type: 'digit' },
    { label: '2', type: 'digit' },
    { label: '3', type: 'digit' },
    { label: '=', type: 'execute', styleKey: 'equal' },

    // 5-й ряд: Ноль (обычно широкий)
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