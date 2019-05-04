const out = process.stdout;
var colors8 = function (pre, post, startCode = 30) {
    const codePointA = "A".codePointAt(0);

    let i = 0;
    while (i < 8) {
        const colorCode = startCode + i;
        const char = String.fromCodePoint(codePointA + i);
        out.write(`${pre}${colorCode}${post}${char} `);
        i++;
    }
    console.log("\u001b[0m");
};

var colors256 = function (pre, post) {
    let i = 0;
    while (i < 16) {
        let j = 0;
        while (j < 16) {
            const colorCode = i * 16 + j;
            const text = `${colorCode}`.padEnd(4);
            out.write(`${pre}${colorCode}${post}${text}`);
            j++;
        }
        console.log("\u001b[0m");
        i++;
    }
};

var decorations = function () {
    const codes = [
        [1, "High"], 
        [2, "Low"], 
        [3, "Italic"], 
        [4, "Underline"], 
        [7, "Reverse"]
    ];

    for (let c of codes) {
        out.write(`\u001b[${c[0]}m${c[1]} \u001b[0m`);
    }
    console.log();
    console.log("\u001b[1m\u001b[4m\u001b[48;5;21m\u001b[31mBlue Background Red Color Bold Underline\u001b[0m");
};
module.exports["colors8"] = colors8;
module.exports["colors256"] = colors256;
module.exports["decorations"] = decorations;