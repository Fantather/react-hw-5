// Разработайте компонент «Калькулятор чаевых»
// Приложение должно позволять пользователю вводить общую сумму счета, 
// выбирать процент чаевых и отображать рассчитанную сумму чаевых и общую сумму (сумма счета + чаевые)

import { useState } from "react";

export default function TipCalculator()
{
    const [invoice, setInvoice] = useState(0);
    const [persent, setPersent] = useState(0);
    

    function calculateFee() {
        return (invoice / 100) * persent;
    }

    function calculateTotalInvoice(){
        return invoice + calculateFee();
    }

    const totalInvoice = calculateTotalInvoice();
    const fee = calculateFee();
    return(
        <div>
            <input type="number" onChange={e => setInvoice(Number(e.target.value))} value={invoice}/>
            <select onChange={e => setPersent(Number(e.target.value))} value={persent}>
                <option value={0}>0%</option>
                <option value={10}>10%</option>
                <option value={25}>25%</option>
                <option value={50}>50%</option>
            </select>
            <div>Чаевые: {fee}</div>
            <div>Общий счёт: {totalInvoice}</div>
        </div>
    );
}