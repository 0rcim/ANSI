/**
 - 光标操作
 * 上：\u001b[{n}A, 光标上移 n 行
 * 下：\u001b[{n}B, 光标下移 n 行
 * 右：\u001b[{n}C, 光标右移 n 个位置
 * 左：\u001b[{n}D, 光标左移 n 个位置
 * 下几行行首：\u001b[{n}E
 * 上几行行首：\u001b[{n}F
 * 指定列：\u001b[{n}G
 * 指定位置：\u001b[{n};{m}H, 移动光标到 n 行 m 列
 * 
 * 清屏：\u001b[{n}J
    * n = 0, 当前光标移动到屏末
    * n = 1, 当前光标移动到屏首
    * n = 2, 整屏
    * 
 * 清行：\u001b[{n}K
    * n = 0, 当前光标到行末
    * n = 1, 当前光标到行首
    * n = 2, 整行
 */

const out = process.stdout;
var sleep = require("./cursor_core").sleep;
async function progressIndicator() {
    console.log("Loading...");
    let i = 0;
    while (i <= 100) {
        await sleep(10);
        out.write(`\u001b[1000D${i}%`);
        i++;
    }
    // 清除进度信息（上两行）然后输出 Done!
    console.log("\u001b[2F\u001b[0JDone!");
}
(async () => {
    await progressIndicator();
})();