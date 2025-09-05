export class Player {
  name;
  level;
  xp;
    
  constructor(name,level,xp) {
    this.name = name;
    this.level = level;
    this.xp = xp;
  }
  
  info(){
      return `${this.name} has reached Level ${this.level}!`
  }

  raiseXp(){
    this.xp += 10;
    return this.levelUp();
  }

  levelUp(){
    if (this.xp >= 100){
      this.level++;
      this.xp -= 100;
      return this.info();
    }
    else {
      return `Aun no subes de nivel, tienes ${this.xp} xp`
    }
  } 
}

function addObjeto(){
  
}



  const burbuja = new Player("burbuja", 1, 10);
  console.log(burbuja)
  const bellota = new Player("bellota", 3, 20);
  console.log(bellota)

  /*while (burbuja.xp <= 100 && burbuja.level <= 10){
     console.log(burbuja.raiseXp())
  }
addMiembro(burbuja);
addMiembro(bellota);
console.log(miembrosArr)
*/