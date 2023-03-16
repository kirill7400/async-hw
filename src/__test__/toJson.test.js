import GameSavingLoader from "../class/GameSavingLoader";
import {expect, jest, test} from '@jest/globals';

//jest.setTimeout(10000)

test('promise test', async () => {
  const saver = new GameSavingLoader
  const obj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000
    }
  }

  const data = await saver.load();
  expect(data).toEqual(obj);
})

test('await/async test', async () => {
  const saver = new GameSavingLoader
  const obj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000
    }
  }

  const data = await saver.loadAsync();
  expect(data).toEqual(obj);
})