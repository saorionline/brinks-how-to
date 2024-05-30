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
 *  - resetProductionLine
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
     * @returns {SedanProductionLine} production line working instance
     */
    setBox(howMany) {
      this.contornoMakeup.box = howMany; //nomenclature before:"sedaCar.airBags"
      return this;
    }
  
    /*
     * @override setColor() method
     * @param {string} color makeup color
     * @returns {SedanProductionLine} production line working instance
     */
    setColor(color) {
      this.sedanCar.color = color;
      return this;
    }
  
    /**
     * @override setEdition() method
     * @param {string} edition car edition
     * @returns {SedanProductionLine} production line working instance
     */
    setEdition(edition) {
      this.sedanCar.edition = edition;
      return this;
    }
  
    /**
     * @param {string} model car model to be build in line
     */
    setModelToBuild(model) {
      this.modelToCustomizeInLine = model;
    }
  
    /**
     * Emulates how the production line receives a new
     * sedan car to be customized for match the desired editions.
     */
    resetProductionLine() {
      this.sedanCar =
        this.modelToCustomizeInLine === 'mastodon'
          ? new MastodonSedanCar()
          : new RhinoSedanCar();
    }
  
    /**
     * Restart production line and returns customized sedan car instance
     * @returns {MastodonSedanCar | RhinoSedanCar} sedan car instance
     */
    build() {
      const sedanCar = this.sedanCar;
      this.resetProductionLine();
      return sedanCar;
    }
  }