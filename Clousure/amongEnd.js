// Cuando una función accede a una variable fuera de su contexto.
const myGlobal = 0;

function almondFridi () {
    const aNumb = 1;
    console.log(myGlobal);

    // Funcion interna
    function parent() {
        const inner = 2;
        console.log(aNumb, myGlobal);

        function child() {
            console.log(inner, aNumb, myGlobal);
        }
        return child();
    }
    return parent();
}

almondFridi();

