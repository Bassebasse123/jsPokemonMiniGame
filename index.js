class Pokemon {
    constructor(name, health, mana) {
        (this.name = name), (this.health = health), (this.mana = mana);
        this.skills = [];
    }
    learnAttackSkill = (attackName) => {
        this.skills.push(attackName);
    };
    showStatus = () => {
        return `${this.name} - HP: ${this.health}, MP: ${this.mana}`;
    };
    attack = (index, opponent) => {
        if (this.health <= 0) {
            console.log(`${this.name} needs some rest...`);
            return ""
        } else if (this.mana >= this.skills[index].manaCost) {
            if (opponent.health >= 0) {
                opponent.health -= this.skills[index].damage;
                this.mana -= this.skills[index].manaCost;
                console.log(
                    `${this.name} casts ${this.skills[index].attackName} for ${this.skills[index].damage} damage.`
                );
                console.log(this.showStatus());
                console.log(opponent.showStatus());
                console.log("OUCH!");
                
            } else {
                console.log(
                    `Thats brutal! Give ${opponent.name} some time to gather strength.`
                );
                return ""
            }
        } else {
            console.log(
                `${this.name} does not have enough mana to cast ${this.skills[index].attackName}`
            );
            return ""
        }
        if (opponent.health <= 0) {
            console.log(`${opponent.name} has been defeated.`)
        }
    };

    getMagic = () => {
        this.mana += 20;
        console.log(`${this.name} grows stronger.`)
        return this.showStatus();
    };
}

class AttackSkill {
    constructor(attackName, damage, manaCost) {
        (this.attackName = attackName),
            (this.damage = damage),
            (this.manaCost = manaCost);
    }
}

// const articuno = new Pokemon("Articuno", 200, 120);
// const zapdos = new Pokemon("Zapdos", 220, 130);
// const moltres = new Pokemon("Moltres", 250, 150);

// const blizzard = new AttackSkill("Blizzard", 45, 50);
// const thunder = new AttackSkill("Thunder", 45, 50);
// const firespin = new AttackSkill("Fire Spin", 55, 60);
// const tackle = new AttackSkill("Tackle", 10, 0);
// const scratch = new AttackSkill("Scratch", 15, 2);
// const bodycheck = new AttackSkill("Bodycheck", 20, 3);

// articuno.learnAttackSkill(blizzard);
// articuno.learnAttackSkill(scratch);

// moltres.learnAttackSkill(firespin);
// moltres.learnAttackSkill(bodycheck);

// zapdos.learnAttackSkill(thunder);
// zapdos.learnAttackSkill(tackle);

// zapdos.attack(0, moltres)

// let pikachu = new Pokemon("pikachu", 120, 80);
// let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// let lightning = new AttackSkill("lightning", 40, 30);
// let poisonSeed = new AttackSkill("poison seed", 20, 20);
// pikachu.learnAttackSkill(lightning);
// bulbasaur.learnAttackSkill(poisonSeed);

// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);


const ditto = new Pokemon("Ditto", 155, 100)
const schleimen = new AttackSkill("Schleim", 68, 63)
const stinken = new AttackSkill("Stinker", 15, 5)

const glurak = new Pokemon("Glurak", 185, 70)
const feuertornado = new AttackSkill("Feuertornado", 60, 55)
const kopfnuss = new AttackSkill("Kopfnuss", 10, 3)

console.log(ditto.showStatus())
console.log(glurak.showStatus())

ditto.learnAttackSkill(schleimen)
glurak.learnAttackSkill(feuertornado)
ditto.attack(0, glurak)
glurak.attack(0, ditto)
ditto.learnAttackSkill(stinken)
glurak.learnAttackSkill(kopfnuss)
ditto.attack(1, glurak)
glurak.getMagic()
ditto.attack(1, glurak)
glurak.getMagic()
ditto.attack(1, glurak)
glurak.attack(0, ditto)
ditto.getMagic()
glurak.getMagic()
ditto.getMagic()
glurak.attack(1, ditto)
ditto.getMagic()
glurak.attack(1, ditto)
ditto.attack(0, glurak)
glurak.attack(1, ditto)
ditto.attack(1, glurak)