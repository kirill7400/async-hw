import reader from '../function/reader'
import parser from '../function/parser'

class GameSavingLoader {
  constructor() {
  }

  load() {
    return reader()
      .then((data) => parser(data))
      .then((json) => JSON.parse(json))
  }

  async loadAsync() {
    return JSON.parse(await parser(await reader()))
  }
}

export default GameSavingLoader