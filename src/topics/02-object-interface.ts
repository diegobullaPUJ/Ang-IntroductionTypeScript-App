
const skills: string[] = ['Bash','Counter','Healing']

interface Character {
    name: string;
    hpPoints: number;
    skills: string[];
    homeTown?: string;
}

const strider: Character = {
    name: 'Strider',
    hpPoints: 100,
    skills: skills
}

strider.homeTown = 'Rivendell';

console.table(strider);







export {}