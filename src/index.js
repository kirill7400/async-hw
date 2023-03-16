import GameSavingLoader from './class/GameSavingLoader'

const saver = new GameSavingLoader

saver.load()
  .then((json) => console.log(json))
  .catch(e => console.log(e));

(async () => {
  try {
    console.log(await saver.loadAsync())
  }
  catch (e) {
    console.log(e)
  }
})()
