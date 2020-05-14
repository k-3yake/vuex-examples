export interface Product {
  id: number
  title: string
  price: number
  inventory: number
}

export async function getProducts():Promise<Product[]> {
  return Promise.resolve([
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ])
}

export async function buy(products: Product[]):Promise<string> {
  return Promise.resolve("buy:" + products.map(p => p.title))
}
