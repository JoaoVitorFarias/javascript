let dophinsTeam = (96 + 108 + 89) / 3;
let koalasTeam = (88 + 91 + 110) / 3;

if (dophinsTeam > koalasTeam && dophinsTeam >= 100) {
    console.log("Dophis wins!!!");
}
else if (koalasTeam > dophinsTeam && koalasTeam >= 100) {
    console.log("Koalas wins!!!");
}
else if (koalasTeam === dophinsTeam && koalasTeam >= 100 && dophinsTeam >= 100) {
    console.log("A drawn.");
}
else {
    console.log("No team wins.")

}