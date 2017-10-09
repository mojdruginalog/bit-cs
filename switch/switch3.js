var dayInAWeek = 2;

switch (dayInAWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
    break;
    case 6:
    case 7:
        console.log("Weekend");
    break;
    default:
        console.log("Input must be between 1 and 7");
}