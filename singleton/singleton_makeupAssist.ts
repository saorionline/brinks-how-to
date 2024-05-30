/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class SkincareKit {
    private static secondInstance: SkincareKit;
    private _secondVersion: string;


  /*
   * Constructor method to be called by static method
   * @param version value that represents the version of the instance
   */

  // STEP 1
  private constructor(secondVersion: string){
    this._secondVersion = secondVersion;
  }
/*
   * Static method that returns unique created instance or create it
   * @param version used only to help us to differentiate the instances
   * @returns unique Singleton instance
   */

// STEP 2
  static getInstance(secondVersion: string): SkincareKit {
    if (!SkincareKit.secondInstance) {
        SkincareKit.secondInstance = new SkincareKit(secondVersion);
    }
    return SkincareKit.secondInstance;
  }

    /*
   * Singleton version attribute getter
   * @returns the version of the instance
   */
  get secondVersion(): string {
    return this._secondVersion;
  }
}  

/*
 * Main function
*/

function appSkincareKit() {
    console.log('---[TS] Calling appSingleton ---\n');
    const skinkit1 = SkincareKit.getInstance('brand-1');
    const skinkit2 = SkincareKit.getInstance('brand-2');
    const skinkit3 = SkincareKit.getInstance('brand-3');

    console.log(
    `skinkit1 and skinkit2 are equal? ${
        skinkit1 === skinkit2 ? 'yes' : 'no'
    }`
    );
    console.log(
        `skinkit2 and skinkit3 are equal? ${
            skinkit2 === skinkit3 ? 'yes' : 'no'
        }`
    );
    console.log(`skinkit1: ${skinkit1.secondVersion}`);
    console.log(`skinkit2: ${skinkit1.secondVersion}`);
    console.log(`skinkit3: ${skinkit1.secondVersion}`);
}