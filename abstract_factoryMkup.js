/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - MiisCosmetics1
 *  - RubyRose1
 STEP 1*/

class MiisCosmetics1 {
    checkAvaility(){
        throw new Error('Method not implemented');
    }
} 
class RubyRose1 {
    checkAvaility(){
        throw new Error('Method not implemented');
    }
}
/* 2. Implement concrete products classes that inherits/implements
*  base products classes/interfaces, the number of concrete prodcuts
*  will depend on the number of families.
*
* Concrete products:
*  - MiisCosContorno 23900
*  - MiisCosHialuronico 19900
*  - RubyRoseContorno 23900
*  - RubyRoseHialuronico 19900
*  - RubyRoseLipOil 12900
*  - RubyRoseMisteryBox 65000
*  - MiisCosLipOil 12900
*  - MiisCosMisteryBox 65000

STEP 2*/
class MiisCosContorno extends MiisCosmetics1 {
    checkAvaility(){
        console.log('[CONTORNO] Miis Cosmetics Availity');
    }
}

class MiisCosHialuronico extends MiisCosmetics1 {
    checkAvaility(){
        console.log('[HIALURONICO] Miis Cosmetics Availity');
    }
}

class RubyRoseContorno extends RubyRose1 {
    checkAvaility(){
        console.log('[CONTORNO] Ruby Rose Availity');
    }
}

class RubyRoseHialuronico extends RubyRose1 {
    checkAvaility(){
        console.log('[HIALURONICO] Ruby Rose Availity');
    }
}

/* 3. Declare abstract factory class/interface that declare creation
*  methods for each base product. The return value could be the base
*  products types or concrete products types.
*
* Abstract Factory:
*   - MakeupFactory
*      * createMiisCosmetics1(): MiisCosmetics1
*      * createRubyRose1(): RubyRose1
// STEP 3*/

class makeupAbstract {
    createMiisCosmetics1() {
        throw new Error('Method not implemented');
    }
    createRubyRose1() {
        throw new Error('Method not implemented');
    }
}

/* 4. Create concrete factories that implements/inherits from the
*  abstract factory behaviour and implements all the products creation
*  methods. The number of concrete factories will depend of the number
*  of product families.
*
* Concrete Factories:
*  -ContornoFactory
*  -HialuronicoFactory
STEP 4*/
class ContornoFactory {
      /*
   * @override createMiisCosmetics1() method
   * @returns MiisCosContorno
   */
    createMiisCosmetics1(){
        return new MiisCosContorno();
    }
    createRubyRose1(){
        return new RubyRoseContorno();
    }
}

class HialuronicoFactory {
    /*
 * @override createMiisCosmetics1() method
 * @returns MiisCosHialuronico
 */
  createMiisCosmetics1(){
      return new MiisCosHialuronico();
  }
  createRubyRose1(){
      return new RubyRoseHialuronico();
  }
}

/*
 * Main function
 * @param {CarAbstractFactory} factory Car factory
 */

function abstractFactoryApp(factory){
    console.log('--[JS] Calling abstractFactoryApp ---\n');
    if(!factory) {
        console.log('--- No factory Provided ---');
        return;
    }

    const miiscosmetics = factory.createMiisCosmetics1();
    const rubyrose = factory.createRubyRose1();

    miiscosmetics.checkAvaility();
    rubyrose.checkAvaility();
}

function createMakeup(name) {
    const factories = {
        contorno: ContornoFactory,
        hialuronico: HialuronicoFactory, 
    };
    const Factory = factories[name];
    return new Factory();
}
/*
 * Instead of using new() operator, we abstract the
 * factories creation and we just indicate the type
 * as a parameter
 */
abstractFactoryApp(createMakeup('contorno'));
abstractFactoryApp(createMakeup('hialuronico'));
