const API_URL = 'https://mate-academy.github.io/react_phone-catalog/api';

export async function getData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

export async function getGoodsFromServer() {
  const phones = await getData<Goods>(`${API_URL}/products.json`);

  return phones;
}

