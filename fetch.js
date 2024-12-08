const products = [
    { name: 'Laptop', price: 89000, brand: 'Lenovo', color: 'Silver'
    },
    { name: 'Mobile', price: 19000, brand: 'Samsung', color: 'Sky Blue'
    },
    { name: 'Watch', price: 9000, brand: 'CASIO', color: 'Black'
    },
    { name: 'Camera', price: 29000, brand: 'Canon', color: 'Black'
    }
];
const newProduct = {name: 'webcam', price: 3433, brand: 'Lal', }

const newProducts = [...products, newProduct];
console.log(newProducts);

const remaining = products.filter(product => product.name !== 'Mobile');
 console.log(remaining);