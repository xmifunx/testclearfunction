import calculateCondition from '../index';

test('character healthy condition check', () => {
  const character = { name: 'Маг', health: 90 };
  const condition = calculateCondition(character);
  expect(condition).toEqual('healthy');
});

test('character wounded condition check', () => {
  const character = { name: 'Маг', health: 45 };
  const condition = calculateCondition(character);
  expect(condition).toEqual('wounded');
});

test('character critical condition check', () => {
  const character = { name: 'Маг', health: 10 };
  const condition = calculateCondition(character);
  expect(condition).toEqual('critical');
});
