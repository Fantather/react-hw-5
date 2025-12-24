import AnimalCard from "../AnimalCard/AnimalCard"
import {animalList} from './AnimalList.module.css'

export default function AnimalList({animals, onDelete, onFeed, onWait}) {
    return(
        <section className={animalList}>
            {animals.map((animal) => 
                <AnimalCard 
                    key={animal.id} 
                    animal={animal} 
                    onDelete={() => onDelete(animal.id)} 
                    onFeed={() => onFeed(animal.id)} 
                    onWait={() => onWait(animal.id)}
                />)}
        </section>
    );
}