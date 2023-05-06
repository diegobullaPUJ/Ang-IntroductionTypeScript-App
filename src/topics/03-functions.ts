
function addNUmbers(a: number,b: number):number {
    return a + b;
} 

const addNumbersArrow = (a:number, b:number):number => { 
    return a + b 
}

const result: number = addNUmbers(1, 2);
const result2: number = addNumbersArrow(1, 2);
console.log({result, result2});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter (strider, 10)

strider.showHp()


export{};