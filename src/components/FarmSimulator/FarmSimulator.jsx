// Симулятор живой фермы (Farm Simulator) 
// Создайте классовый или функциональный компонент FarmSimulator, который:

// 1) Хранит массив животных в state
// Каждое животное имеет поля: id, type (например, корова, курица, свинья), name, age, hunger (число от 0 до 100)

// 2) Позволяет добавлять новое животное с выбором типа, имени и возраста

// 3) Отображает все животные в виде карточек с их данными и шкалой голода (например, полоской прогресса)

// 4) Позволяет кормить животное, уменьшая его голод на определённое значение, 
// и старить животных (увеличение возраста и голода при обновлении времени)

// 5) При каждом обновлении состояния (кормление или старение) сохраняет данные в localStorage

// 6) Позволяет удалять животное с фермы

import {container, creationPanel, controlsRow, fieldGroup} from './FarmSimulator.module.css'

import { useState } from "react";
import useFarmAnimals from './hooks/useFarmAnimals';

import AnimalList from './AnimalList/AnimalList';
import TypesSelect from './TypesSelect';

import ANIMAL_TYPES from "./data/FarmSimulator";


export default function FarmSimulator(){
    const [animals, addAnimal, deleteAnimal, feedAnimal, skipTime] = useFarmAnimals();
    const [name, setName] = useState('');
    const [type, setType] = useState('cow');

    function handleAddAnimal(){
        const id = new Date().toISOString();
        const maxAge = 100;
        const currentHunger = 80;
        const currentAge = 0;
        const {imgSrc, imgAlt} =  ANIMAL_TYPES.find(t => t.value === type);

        addAnimal(id, name, type, currentAge, maxAge, currentHunger, imgSrc, imgAlt);
    }

    function handleDeleteAnimal(targetId){
        deleteAnimal(targetId);
    }

    function handleFeedAnimal(targetId){
        const addedSatiety = 25;
        feedAnimal(targetId, addedSatiety);
    }

    function handleWait(targetId){
        const skippingValue = 1;
        const addedHunger = 20;
        skipTime(targetId, skippingValue, addedHunger);
    }

    return(
        <div className={container}>
            <section className={creationPanel}>
                <div className={controlsRow}>
                    <label className={fieldGroup}>
                        Имя животного:
                        <input type="text" onChange={(e)=>setName(e.target.value)}/>
                    </label>
                    <label className={fieldGroup}>
                        Тип:
                        <TypesSelect types={ANIMAL_TYPES} onChange={(value) => setType(value)}/>
                    </label>
                </div>
                <button onClick={handleAddAnimal}>Добавить животное</button>
            </section>
            <AnimalList animals={animals} onDelete={handleDeleteAnimal} onFeed={handleFeedAnimal} onWait={handleWait}/>
        </div>
    )
}