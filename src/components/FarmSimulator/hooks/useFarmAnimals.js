import useLocalStorage from "./useLocalStorage";
import Animal from "../models/Animal";
import { useEffect } from "react";


export default function useFarmAnimals()
{
    const [animals, setAnimals] = useLocalStorage('animals', []);

    useEffect(() => {
        setAnimals(animals.map(animal => Animal.getAnimal(animal)));
    }, []);

    function addAnimal(id, name, type, age, ageMax, hunger, imgSrc, imgAlt)
    {
        console.log(`Тип: ${type} Имя: ${name} Возраст: ${age} Голод: ${hunger}`);
        const animal = new Animal(id, name, type, age, ageMax, hunger, imgSrc, imgAlt);
        setAnimals([...animals, animal]);
    }

    function deleteAnimal(targetId)
    {
        const updatedAnimals = animals.filter(({id}) => targetId !== id);
        setAnimals(updatedAnimals);
    }

    // Увеличивает значение сытости
    function feedAnimal(targetId, value)
    {
        const targetProperty = 'hunger';
        const updatedHunger = findAnimal(targetId)[targetProperty] + value;
        setAnimalState(targetId, targetProperty, updatedHunger);
    }

    // Уменьшает значение сытости
    function addHunger(targetId, value)
    {
        const targetProperty = 'hunger';
        const updatedHunger = findAnimal(targetId)[targetProperty] - value;
        setAnimalState(targetId, targetProperty, updatedHunger);
    }

    // Увеличивает возраст животного и уменьшает голод
    function skipTime(targetId, skippingValue, hungerValue)
    {
        const targetProperty = 'age';
        const updatedAge = findAnimal(targetId)[targetProperty] + skippingValue;
        setAnimalState(targetId, targetProperty, updatedAge);
        addHunger(targetId, hungerValue);
    }

    // === Вспомогательные функции ===
    function findAnimal(targetId)
    {
        return animals.find(({id}) => id === targetId);
    }

    // Перебирает и копирует весь массив, что бы изменить одно единственное свойство
    function setAnimalState(targetId, targetProperty, updatedValue) {
        setAnimals((currentAnimals) => {
            return currentAnimals.map((animal) => {
                const {id, name, type, age, ageMax, hunger, imgSrc, imgAlt, hungerMin, hungerMax} = animal;
                
                if (id !== targetId) {
                    return animal;
                } 
                else {
                    const updatedAnimal = new Animal(id, name, type, age, ageMax, hunger, imgSrc, imgAlt, hungerMin, hungerMax);
                    updatedAnimal[targetProperty] = updatedValue;
                    return updatedAnimal;
                }
            });
        });
    }

    return [animals, addAnimal, deleteAnimal, feedAnimal, skipTime];
}