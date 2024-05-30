/*
 * How to implement Builder
 *
 * 1. Declare base builder base class/interface who will define
 *  the general steps for build products, each builder must
 *  implement functionality for these steps.
 *
 * Base builder:
 *  - MakeupLine
 *
 * Build steps:
 *  - setBox "airbags"
 *  - setColor
 *  - setEdition
 *  - resetLine
 */

// STEP 1
class MakeupLine {
    /*
     * @param {number} howMany number of Mistery Boxes are there in the Make Up Store
     */
    setBox(howMany) {
      throw new Error('Method not implemented!');
    }
  
    /**
     * @param {string} color color to be set in the Make Up Store
     */
    setColor(color) {
      throw new Error('Method not implemented!');
    }
  
    /**
     * @param {string} edition sedan edition to be set in the Make Up Store
     */
    setEdition(edition) {
      throw new Error('Method not implemented!');
    }
  
    /**
     * Emulates how the production line receives a new
     * Make Up Store to work.
     */
    resetProductionLine() {
      throw new Error('Method not implemented!');
    }
  }

  /* 2. Implement concrete builders subclasses that offer different
  *  versions of the build steps. These builders could create
  *  concrete products or base ones. Depends on what we need.
  *
  *  ContornoLine ("SedanProductionLine"): build() -> {MiisCosmetics|RubyRose}Makeup | Makeup   ("{Mastodon|Rhino}Car | Car")
  *  HialuroLine ("RhinoProductionLine"): build() -> {MiisCosmetics|RubyRose}Makeup | Makeup
  */

  // STEP 2
class ContornoLine extends MakeupLine {
    /*
     * For now the production line class is composed (creating) by the
     * different contorno makeup models. Ideally the line should receive the
     *  contorno makeup instance as param, an aggregation relationship.
     *
     * @param {string} modelToCustomizeInLine car model to customize in the line
     */
    constructor({ modeLine }) { //nomenclature before: modelToCustomizeInLine"
      super();
      this.setBuild(modeLine); //nomenclature before: "setModelToBuild"
      this.resetLine(); //nomenclature before: "resetProductionLine"
    }
  
    /*
     * @override setAirBags() method
     * @param {number} howMany aribags number
     * @returns {SedanLine} production line working instance
     */
    setBox(howMany) {
      this.contornoMakeup.box = howMany; //nomenclature before:"sedaCar.airBags"
      return this;
    }
  
    /*
     * @override setColor() method
     * @param {string} color makeup color
     * @returns {ContornoLine} production line working instance
     */
    setColor(color) {
      this.contornoMakeup.color = color;//nomenclature before:"sedaCar"
      return this;
    }
  
    /*
     * @override setEdition() method
     * @param {string} edition car edition
     * @returns {ContornoLine} production line working instance
     */
    setEdition(edition) {
      this.contornoMakeup.edition = edition;
      return this;
    }
  
    /*
     * @param {string} model makeup model to be build in line
     */
    setBuild(model) { // nom before: setModelToBuild
      this.modeLine = model; // nom before: modelToCustomizeInLine
    }
  
    /**
     * Emulates how the production line receives a new
     * contorno makeup to be customized for match the desired editions.
     */
    resetLine() {
      this.contornoMakeup =
        this.modeLine === 'miis_cosmetics'
          ? new MiisContorno() //nom before MastodonSedanCar
          : new RubyRContorno();  // nom before RhinoSedanCar
    }
  
    /*
     * Restart production line and returns customized sedan car instance
     * @returns {MiisContorno |  RubyRContorno} contorno makeup instance
     */
    build() {
      const contornoMakeup = this.contornoMakeup;
      this.resetLine();
      return contornoMakeup;
    }
  }

  /* 3. Implement Product classes, these ones could not inherit/implement
  *  from base class/interface.
  *
  *  For the problem we will make the builder returns the
  *  product base class.
  *
  *  Base product:
  *    - BaseMakeup Nom before: BaseCar
  *
  *  Concrete products:
  *    - MiisContorno
  *    - RhinoSedanCar
  * STEP 4*/

  class BaseMakeup {
    constructor() {
      this._edition = '';
      this._model = '';
      this._box = 2;
      this._color = 'black';
    }
  
    /*
     * Base car airBags attribute setter
     * @param {number} howMany box number
     */
    set box(howMany) {
      this._box = howMany;
    }
  
    /*
     * Base car color attribute setter
     * @param {string} color car color
     */
    set color(color) {
      this._color = color;
    }
  
    /*
     * Base car edition attribute setter
     * @param {string} edition car edition
     */
    set edition(edition) {
      this._edition = edition;
    }
  
    /*
     * Base car model attribute setter
     * @param {string} model car model (sedan/hatchbak)
     */
    set model(model) {
      this._model = model;
    }
  }
  
  class MiisContorno extends BaseMakeup { // before: MastodonSedanCar
    constructor() {
      super();
      this.model = 'contorno';
    }
  }
  
  class RubyRContorno extends BaseMakeup {
    constructor() {
      super();
      this.model = 'contorno';
    }
  }
  
  /* 4. Implement director class, this one will know the build
  *  process for each product, so we can create specific
  *  configurations for the products.
  *
  *  Product representations
  *      constructCvtEdition
  *      constructSignatureEdition
  * STEP 4*/

  class Director {
    /*
     * Set the production line to be used for the director to build editions
     * @param {MakeupLine} productionLine contains concrete customization steps implementation
     */
    setLine(productionLine) {
      this.productionLine = productionLine;
    }
  
    /**
     * CVT Edition customization steps
     */
    constructCvtEdition() {
      this.productionLine
        .setBox(4)
        .setColor('blue')
        .setEdition('cvt');
    }
  
    /**
     * Signature Edition customization steps
     */
    constructEdition() {
      this.productionLine
        .setBox(5)
        .setColor('pink')
        .setEdition('signature');
    }
  }

  /*
 * Main function
 */
function appBuilder(director) {
    console.log('--- [JS] Calling appBuilder ---\n');

  if (!director) {
    console.log('--- No director provided ---');
    return;
  }

  const MiisContornoLine = new ContornoLine({ // nom before mastodonSedanProductionLine &&  SedanProductionLine
    modeLine: 'miis_cosmetics',
  });

  director.setLine(MiisContornoLine);

  director.constructCvtEdition();
  const missContornoCvt = MiisContornoLine.build(); // now before mastodnSedanCvt
  console.log('--- Miis Cosmetics Contorno CVT ---\n');
  console.log(missContornoCvt);

  director.constructEdition(); // now before constructSignatureEdition
  const miisContornoSignature = MiisContornoLine.build(); // now before mastodonSedanSignature
  console.log('\n--- Miis Cosmetics Contorno Signature ---\n');
  console.log(miisContornoSignature);
}
appBuilder(new Director());