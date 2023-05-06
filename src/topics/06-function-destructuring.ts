
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'ipad Air',
    price: 250.0
}


export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

 export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    const { products,tax } = options //Desestructuración de options.
    let total = 0;
    products.forEach( ({ price })  => {
        total += price;
    });
    return [total, total * tax]
}

const shoppingCart = [phone,  tablet];
const tax = 0.15;

const[ Total, totalTax ] = taxCalculation({
    tax: tax,
    products: shoppingCart,
})

console.log('Total', Total)
console.log('Impuesto', totalTax)

