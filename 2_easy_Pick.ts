/**
 * Implement the built-in Pick<T, K> generic without using it.
 * Constructs a type by picking the set of properties K from T
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Item {
  title: string;
  price: number;
  code: string;
  description: string;
}

function getItem(item: MyPick<Item, 'title' | 'price'>) {}
