
let direction = "Expert"

    let plan = {
        Free: 'You can only take whats free',
        Basic: "For a month you can take almost every course",
        Expert: "For a year you can take almost every course",
        ExpertPlus: "For a year you can take almost every course",
    }

    Object.keys(plan).find((result) => {
        if (result == direction){
    console.log(direction);
        }
    });

