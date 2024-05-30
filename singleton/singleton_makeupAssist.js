/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class SkinCare {
    static instance = undefined;


    //STEP 1

    constructor (uniqueVersion) {
        this._uniqueVersion = uniqueVersion;
    }

    /*
    * Static method that returns unique created instance or create it
    * @param version used only to help us to differentiate the instances
    * @returns {Singleton} unique Singleton instance
    */

    // Step 2

    static getInstance(uniqueVersion) {
        if (!SkinCare.instance) {
            SkinCare.instance = new SkinCare(uniqueVersion);
        }
        return SkinCare.instance;
    }

    /*
    * Singleton version attribute getter
    * @returns the version of the instance
    */

        get uniqueVersion() {
        return this._uniqueVersion;
    }  
}
    /**
    * Main function
    */

function appSkincare() {
    console.log('---[JS] Calling appSkincare ---\n');
    const skincare1 = SkinCare.getInstance('brand-1');
    const skincare2 = SkinCare.getInstance('brand-2');
    const skincare3 = SkinCare.getInstance('brand-3');

    console.log(
    `skincare1 and skincare2 are equal? ${
        skincare1 === skincare2 ? 'yes' : 'no'
    }`
    );
    console.log(
        `skincare2 and skincare3 are equal? ${
            skincare2 === skincare3 ? 'yes' : 'no'
        }`
    );
// Let's verify if the brands and equal too
console.log(`skincare1 version: ${skincare1.uniqueVersion}`);
console.log(`skincare2 version: ${skincare2.uniqueVersion}`);
console.log(`skincare3 version: ${skincare3.uniqueVersion}`);
}

appSkincare();