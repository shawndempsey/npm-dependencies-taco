const { Lettuce } = require("npm-dependencies-lettuce");

class Taco {
    constructor() {
        this.lettuce = new Lettuce();
    }
    describe() {
        return `Taco v1.0.1 ${this.lettuce.describe()}`;
    }
}
module.exports.Taco = Taco;
