class GameSaving {
  constructor(param) {
    this.id = param.id
    this.created = param.created
    this.userInfo = {
      id: param.userInfo.id,
      name: param.userInfo.name,
      level: param.userInfo.level,
      points: param.userInfo.points
    }
  }
}

export default GameSaving