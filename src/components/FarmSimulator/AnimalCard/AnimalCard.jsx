// 3) Отображает все животные в виде карточек с их данными и шкалой голода (например, полоской прогресса)
// 4) Позволяет кормить животное, уменьшая его голод на определённое значение, 
// и старить животных (увеличение возраста и голода при обновлении времени)

// 5) При каждом обновлении состояния (кормление или старение) сохраняет данные в localStorage

// 6) Позволяет удалять животное с фермы

import {card, icon, mainInfo, header, title, meta, hungerContainer, hungerValue, progressBar, buttonContainer} from './AnimalCard.module.css'

export default function AnimalCard({animal, onFeed, onWait, onDelete}){
    const {name, type, age, hunger, imgSrc, imgAlt, hungerMax} = animal;
    return(
        <article className={card}>
            <img className={icon} src={imgSrc} alt={imgAlt} />
            <span className={mainInfo}>
                <header className={header}>
                    <h3 className={title}>{name}</h3>
                    <h3 className={title}>({type})</h3>
                </header>
                <span className={meta}>
                    <span>{age}</span>
                    <div className={hungerContainer}>
                        <span>Голод:</span>
                        <span className={hungerValue}>{hunger}</span>
                        <progress className={progressBar} value={hunger} max={hungerMax}></progress>
                    </div>
                </span>
                <div className={buttonContainer}>
                    <button onClick={onFeed}>Покормить</button>
                    <button onClick={onWait}>Подождать</button>
                    <button onClick={onDelete}>Удалить</button>
                </div>
            </span>
        </article>
    );
}