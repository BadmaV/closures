import findBy from '../findBy';

const arr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

const finder = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
];

test('find by item', () => {
  const finder1 = findBy('name', 'маг');
  const finder2 = findBy('name');
  const finder3 = findBy();

  const result1 = arr.filter(finder1);
  const result2 = arr.filter(finder2);
  const result3 = arr.filter(finder3);

  expect(result1).toEqual(finder);
  expect(result2).toEqual([]);
  expect(result3[0].name).toEqual('маг');
});
