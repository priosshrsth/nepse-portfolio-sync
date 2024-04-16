const red = (input) => "\x1b[31m" + input + "\x1b[0m";
// const green = (input) => "\x1b[32m" + input + "\x1b[0m";
// const yellow = (input) => "\x1b[33m" + input + "\x1b[0m";
// const blue = (input) => "\x1b[34m" + input + "\x1b[0m";
// const magenta = (input) => "\x1b[35m" + input + "\x1b[0m";
// const cyan = (input) => "\x1b[36m" + input + "\x1b[0m";
// const white = (input) => "\x1b[37m" + input + "\x1b[0m";
// const gray = (input) => "\x1b[90m" + input + "\x1b[0m";
//
// const bgBlack = (input) => "\x1b[40m" + input + "\x1b[0m";
// const bgRed = (input) => "\x1b[41m" + input + "\x1b[0m";
// const bgGreen = (input) => "\x1b[42m" + input + "\x1b[0m";
// const bgYellow = (input) => "\x1b[43m" + input + "\x1b[0m";
// const bgBlue = (input) => "\x1b[44m" + input + "\x1b[0m";
// const bgMagenta = (input) => "\x1b[45m" + input + "\x1b[0m";
// const bgCyan = (input) => "\x1b[46m" + input + "\x1b[0m";
// const bgWhite = (input) => "\x1b[47m" + input + "\x1b[0m";
// const bgGray = (input) => "\x1b[100m" + input + "\x1b[0m";
// const bright = (input) => "\x1b[1m" + input + "\x1b[0m";
// const dim = (input) => "\x1b[2m" + input + "\x1b[0m";
// const underscore = (input) => "\x1b[4m" + input + "\x1b[0m";
// const blink = (input) => "\x1b[5m" + input + "\x1b[0m";
// const reverse = (input) => "\x1b[7m" + input + "\x1b[0m";
// const hidden = (input) => "\x1b[8m" + input + "\x1b[0m";
//
// const black = (input) => "\x1b[30m" + input + "\x1b[0m";

export const logError = (...msgs) => {
  msgs.forEach((msg) => console.error(typeof msg === "string" ? red(msg) : msg));
};
