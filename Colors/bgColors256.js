var colors256 = require("./colors_core").colors256;
function bgColors256() {
    colors256("\u001b[48;5;", "m")
}
bgColors256();