var colors8 = require("./colors_core").colors8;

function fgColors8() {
    colors8("\u001b[", "m")
}
function fgColors8Bright() {
    colors8("\u001b[", ";1m")
}
fgColors8();
fgColors8Bright();