import styles from './Keypad.module.css';
import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

export default function Keypad()
{
    const {BUTTONS_CONFIG, execute, clear, backspace, handleDigit, handleOperator} = useContext(CalculatorContext);

    const getHandler = (btn) => {
        switch (btn.type) {
            case 'digit': return () => handleDigit(btn.label);
            case 'operator': return () => handleOperator(btn.label);
            case 'execute': return () => execute();
            case 'clear': return () => clear();
            case 'backspace': return () => backspace();
            default: return () => {};
        }
    };

    return(
        <div className={styles.keypad}>
            {BUTTONS_CONFIG.map((btn, index) => {                
                const classes = `${styles.btn} ${btn.styleKey ? styles[btn.styleKey] : ''}`;

                return (
                    <button 
                        key={index} 
                        className={classes}
                        onClick={getHandler(btn)}
                    >
                        {btn.label}
                    </button>
                )
            })}
        </div>
    );
}