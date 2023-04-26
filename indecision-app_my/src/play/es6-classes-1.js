class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGretting() {
      return `Hi. I am ${this.name} and my age is ${this.age}!`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }
  

  class Treveller extends Person {

    constructor(name = 'Anonymous', age = 0, homeLocation = 'Unknown') {
        super(name, age);
        this.homeLocation = homeLocation;
      }
      getGretting() {
        let gretting = super.getGretting();
        if (this.homeLocation) {
            gretting += ` I am visiting from ${this.homeLocation}`;
        }

        return gretting;
      }
  
  }
  const me = new Treveller('Val O', 26, "Novato");
  console.log(me.getGretting());
