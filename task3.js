export class Player {
    name;
    level;
    
    constructor(name,level) {
      this.name = name;
      this.level = level;
    }
  
    info(){
      `${this.name} has reached Level ${this.level}!`
    }
    
  }