import reader from '../function/reader'
import parser from '../function/parser'
import GameSaving from './GameSaving'

class GameSavingLoader {
  constructor() {
  }

  load() {
    return reader()
      .then((data) => parser(data))
      .then((json) => Object.assign(new GameSaving(), JSON.parse(json)))
  }

  async loadAsync() {
    return Object.assign(new GameSaving(), JSON.parse(await parser(await reader())))
  }
}

export default GameSavingLoader