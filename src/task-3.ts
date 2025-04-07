const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  title: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
  price: 1000,
};

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
