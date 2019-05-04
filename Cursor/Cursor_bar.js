const out = process.stdout;
var sleep = require("./cursor_core").sleep;
async function progressBars(count = 1) {
    const list = [];
    let i = 0;
    while (i++ < count) {
        list[i] = 0;
    }

    // 占位提供空间
    out.write(list.map(i => " ").join("\n"));

    while (list.some(i => i<100)) {
        await sleep(10);

        const unfinished = list.reduce((p, c, i) => {
            if (c < 100) p.push(i);
            return p;
        }, []);
        const randomIndex = unfinished[Math.floor(Math.random() * unfinished.length)];
        list[randomIndex] += 1;

        out.write("\u001b[1000D");
        out.write("\u001b[" + count + "A");
        list.forEach(p => {
            const width = Math.floor(p / 4);
            console.log("[" + "#".repeat(width) + " ".repeat(25 - width) + "]");
        });
    }

    console.log(`\u001b[1000D\u001b[${count}A\u001b[0JDone!`);
}

(async () => {
    console.log("Single progress");
    await progressBars();

    console.log();
    console.log("Multiple progress");
    await progressBars(4);
})();