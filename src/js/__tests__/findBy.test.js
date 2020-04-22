import findBy from '../findBy';

test('simple', () => {
  const searchArray = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('name', 'маг');
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  ];
  const resolved = searchArray.filter(finder);

  expect(resolved).toEqual(expected);
});

test('simple without value', () => {
  const searchArray = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('name');
  const expected = [];
  const resolved = searchArray.filter(finder);
  expect(resolved).toEqual(expected);
});

test('empty args search', () => {
  const searchArray = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy();
  const expected = searchArray;
  const resolved = searchArray.filter(finder);
  expect(resolved).toEqual(expected);
});
