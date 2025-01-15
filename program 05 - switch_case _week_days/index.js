// SWITCH = can be an efficient replacement to many else if statements

let day = 3;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        
}

// ex 2

let testeScore = 82;
let letterGrade;

switch(true){
    case testeScore >= 90:
        letterGrade = "A";
        break;
    case testeScore >= 80:
        letterGrade = "B";
        break;
    case testeScore >= 70:
        letterGrade = "C";
        break;
    case testeScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
    
}

console.log(letterGrade);