export class Player {
    name;
    level;
    
    constructor(name,level) {
      this.name = name;
      this.level = level;
    }
  
    info(){
      return `${this.name} has reached Level ${this.level}!`
    }

    levelUp(){
      this.level ++; 
      return this.info();
        
    }
    
  }
  const burbuja = new Player("burbuja", 1);
  console.log(burbuja)
  console.log(burbuja.info())
  console.log(burbuja.levelUp())

