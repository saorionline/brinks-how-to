function vigilantEye() {
    let policeMan = 'Franklin';

    function displayPolice() {
        return `This is ${policeMan}`;
    }

    return displayPolice()
}

const groupAgents = vigilantEye();
console.log(groupAgents);