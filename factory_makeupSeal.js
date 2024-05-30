/* How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their sub classes.
 *
 * Base product:
 *  - starTonifier
 *
 STEP 1*/
class starTonifier {
  showCost() {
    throw new Error('Method not implemented!');
  }
}
/*
 * 2. Implement concrete products sub classes that inherits/implements
 *  the base product class/interface.
 
Concrete products:
 *  - MiisCosmetics
 *  - RubyRose
 *
// STEP 2*/
class MiisCosmetics extends starTonifier {
  /* @override showCost() method */
  showCost() {
    console.log('[MIISCOSMETICS] Tonifier Cost: 75,000 COP');
  }
}

class RubyRose extends starTonifier {
    showCost() {
        console.log('[RUBYROSE] Tonifier Cost: 85,000 COP')
    }
}
/*  3. Declare base factory class/interface that returns objects that match
*  the base product, not the concrete ones.
*
* Base factory:
*  - MakeupFactor
*  - MiisCosMakeupFactory
*
STEP 3 */
class MakeupFactory {
  createMakeup() {
    throw new Error('Method not implemented!');
  }
}
/* 4. Implement concrete factories sub classes that inherits/implements
 *  the base factory class/interface. These classes will return concrete
 *  products in their factory method.
 *
 * Concrete factories:
 *  - MiisCosMakeupFactory
 *  - RubyRoseMakeupFactory
 *
 *STEP 4 */
class MiisCosMakeupFactory extends MakeupFactory {
    /*
     * @override createMakeup() method
     * @returns MastodonCar
     */
    createMakeup() {
      return new MiisCosmetics();
    }
  }

  class RubyRoseMakeupFactory extends MakeupFactory {
    /*
     * @override createMakeup() method
     * @returns MastodonCar
     */
    createMakeup() {
      return new RubyRose();
    }
  }  

function makeupApp(factory) {
    console.log('---[JS] Calling makeupApp ---\n');
    if (!factory) {
        console.log('---No factory provided ---');
        return;
    }
    const makeup = factory.createMakeup();
    makeup.showCost();
}
/*
 * You could change the Factory as you wish since
 * all of them implement the same behaviour.
 */
makeupApp(new MiisCosMakeupFactory());
makeupApp(new RubyRoseMakeupFactory());

function createMakeup(type){
        const factories = {
            miiscosmetics: MiisCosMakeupFactory,
            rubyrose: RubyRoseMakeupFactory,
        };
        const FactoryClass = factories[type];
        return new FactoryClass();
    };
/**
 * Instead of using new() operator, we abstract the
 * factories creation and we just indicate the type
 * as a parameter
 */
makeupApp(createMakeup('miiscosmetics'));
makeupApp(createMakeup('rubyrose'));    