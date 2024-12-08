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

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product));
