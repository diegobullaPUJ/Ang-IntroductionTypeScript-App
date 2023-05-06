
import { Product, taxCalculation } from './06-function-destructuring';


const shoppingCart: Product[] = [

    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];


const [Total,Tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', Total)
console.log('Impuesto', Tax)




