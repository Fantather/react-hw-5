// Каждое животное имеет поля: id, type (например, корова, курица, свинья), name, age, hunger (число от 0 до 100)


export default class Animal
{
    #age;
    #hunger;

    /**
     * @param {number} id     Уникальный идентификатор объекта
     * @param {string} name   Имя животного
     * @param {string} type   Тип животного (корова, курица, свинья)
     * @param {number} age    Возраст животного
     * @param {number} hunger Уровень голода [0-100]
     * @param {string} imgSrc Путь к изображению животного
     * @param {string} imgAlt Фраза, поясняющая что изображено на картинке
     */
    constructor(id, name, type, age, ageMax, hunger, imgSrc, imgAlt, hungerMin = 0, hungerMax = 100){
        this.id = id;
        this.type = type;
        this.name = name;
        this.ageMax = ageMax;
        this.age = age;
        this.hungerMin = hungerMin;
        this.hungerMax = hungerMax;
        this.hunger = hunger;
        this.isAlive = true;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
    }

    static getAnimal({id, name, type, age, ageMax, hunger, imgSrc, imgAlt, hungerMin, hungerMax}) {
        return new Animal(id, name, type, age, ageMax, hunger, imgSrc, imgAlt, hungerMin, hungerMax);
    }

    set age(value)
    {
        const ageMin = 0;
        const {ageMax} = this;

        if(value > ageMin && value < ageMax)
        {
            this.#age = value;
        }
        else if(value >= ageMax) {
            this.#age = ageMax;
        }
        else if(value <= ageMin){
            this.#age = ageMin;
        }
    }

    get age()
    {
        return this.#age;
    }


    set hunger(value)
    {
        const {hungerMax, hungerMin} = this;

        if(value > hungerMin && value < hungerMax)
        {
            this.#hunger = value;
        }
        else if(value >= hungerMax)
        {
            this.#hunger = hungerMax;
        }
        else if(value <= hungerMin)
        {
            this.#hunger = hungerMin;
        }
    }

    get hunger()
    {
        return this.#hunger;
    }


    toJSON() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            age: this.age,
            ageMax: this.ageMax,
            hunger: this.hunger,
            imgSrc: this.imgSrc,
            imgAlt: this.imgAlt,
            hungerMin: this.hungerMin,
            hungerMax: this.hungerMax
        };
    }

    static fromJSON(obj){
        return Animal.getAnimal(obj);
    }
}