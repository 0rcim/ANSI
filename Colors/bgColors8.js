/**
 - 8 色 
 * {{ \u001b[?m }} 其中 ? ∈ [40, 47]
 * 黑 black: \u001b[40m
 * 红 red: \u001b[41m
 * 绿 green: \u001b[42m
 * 黄 yellow: \u001b[43m
 * 蓝 blue: \u001b[44m
 * 品红 magenta: \u001b[45m
 * 蓝绿 cyan: \u001b[46m
 * 白 white: \u001b[47m
 */
/**
 - 16 色 
 * {{ \u001b[?;1m }} 其中 ? ∈ [40, 47]
 * 黑 black: \u001b[40;1m
 * 红 red: \u001b[41;1m
 * 绿 green: \u001b[42;1m
 * 黄 yellow: \u001b[43;1m
 * 蓝 blue: \u001b[44;1m
 * 品红 magenta: \u001b[45;1m
 * 蓝绿 cyan: \u001b[46;1m
 * 白 white: \u001b[47;1m
 */

var colors8 = require("./colors_core").colors8;
function bgColors8() {
    colors8("\u001b[", "m", 40);
}
function bgColors8Bright() {
    colors8("\u001b[", ";1m", 40);
}

bgColors8();
bgColors8Bright();