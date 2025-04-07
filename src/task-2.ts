const products: Product[] = [ ... ];

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

console.log(`Product: ${JSON.stringify(product)}`);
