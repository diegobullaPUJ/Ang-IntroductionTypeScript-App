
export interface Passenger {
    name: string;
    children?: string[];
} 


const passenger1: Passenger = {
    name: 'Fernando',

}

const passenger2: Passenger = {
    name:'Fernando',
    children: ['Natalia', 'Elizabeth' ],
}

const printChildren = ( passenger: Passenger ) => {

    const HowManyChildrens = passenger.children?.length || 0;

    console.log( HowManyChildrens);
}

printChildren( passenger2 );
printChildren( passenger1 );
