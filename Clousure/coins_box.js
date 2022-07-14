function coinBox (money) {
    let saveCoins = 0;
    saveCoins += money;
    console.log(`You have ${saveCoins} in total`)
}

coinBox(5);
coinBox(5);

function pigCoin() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`You have ${saveCoins} in total`)
    }
    return countCoins;
}

const agentDisplayer = pigCoin();
agentDisplayer(5);
agentDisplayer(5);
agentDisplayer(15);

const personalBox =  pigCoin();
personalBox(10);
personalBox(20);
agentDisplayer(30);