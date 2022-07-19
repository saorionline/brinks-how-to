const tipoDeSuscripcion = ["Free","Basic","Expert","ExpertPlus"]
/*
switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}
*/
    if (tipoDeSuscripcion === "Free") {
        console.log("You can only take what's free");
    } else if (tipoDeSuscripcion === "Basic") {
        console.log("For a month you can take almost every course");
    } else if (tipoDeSuscripcion === "Expert") {
        console.log("For a year you can take almost every course");
    } else if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("For a year you and someone else can take almost every course");
    }


