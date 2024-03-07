class hero{
    constructor(HeroName, HeroAge, HeroType){
        this.HeroName = HeroName;
        this.HeroAge = HeroAge;
        this.HeroType = HeroType;
    }

    attack(){
        let HeroAttack;

        if(this.HeroType === "Mage"){
            HeroAttack = "Magic Skill";
            console.log("O " + this.HeroType + " atacou usando " + HeroAttack + ".");
        }
        else if(this.HeroType === "Warrior"){
            HeroAttack = "Sword Skill";
            console.log("O " + this.HeroType + " atacou usando " + HeroAttack + ".");
        }
         else if(this.HeroType === "Monk"){
            HeroAttack = "Kung-Fu Skill";
            console.log("O " + this.HeroType + " atacou usando " + HeroAttack + ".");
        }
        else if(this.HeroType === "Ninja"){
            HeroAttack = "Shuriken Skill";
            console.log("O " + this.HeroType + " atacou usando " + HeroAttack + ".");
        }
        else{
            console.log("O Herói não existe!")
        }
       
    }
    
}
const myHero = new hero("Marcelo", 28, "Ninja");
myHero.attack();
