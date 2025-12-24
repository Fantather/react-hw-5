// Динамическая форма с несколькими полями. Создайте компонент DynamicForm, который: 
// 1) Хранит состояние в виде объекта с полями формы (name, email, phone и т.д.)
// 2) Позволяет пользователю динамически добавлять новые поля (например, "Дополнительная информация")
// 3) Каждое поле управляется через state и может быть изменено пользователем
// 4) Показывает текущее состояние формы в реальном времени под формой
// 5) Добавьте кнопку "Очистить форму", которая сбрасывает все поля

import { useState } from "react";
import Field from "./Field";

export default function DynamicForm()
{
    const [fields, setFields] = useState([
        {id: 1, label: 'Введите имя'},
        {id: 2, label: 'Введите email'},
        {id: 3, label: 'Введите номер телефона'},
    ]);

    const [newFieldName, setNewFieldName] = useState('');

    const handleAddField = () => {
        const newField = {id: new Date().toISOString, label: newFieldName};
        setFields([...fields, newField]);
    }

    const handleCrearField = () => {
        setFields([]);
    }

    return(
        <div>
            <h3>Форма</h3>
            {fields.map(({id, label}) => <Field key={id} label={label} />)}
            <h3>Добавить форму</h3>
            <label>
                Название новой формы: 
                <input type="text" onChange={e => setNewFieldName(e.target.value)} value={newFieldName}/>
                <button onClick={handleAddField}>Добавить новое поле</button>
                <button onClick={handleCrearField}>Очистить форму</button>
            </label>
        </div>
    )
}