let delay = 0;
let spinnerArms = [' ', '\r| ', '\r/ ', '\r- ', '\r\\  ', '\r| ', '\r/ ', '\r- ', '\r\\  ', '\r| '];
let lineBreak = '\n';
// ~1900 ms = total time from previous code

for (let i = 1; i <= 9; i++) {
// let spinTime = 100 + (i + 200); // added tp ;ome 10 to save space
setTimeout(() => {
  process.stdout.write(spinnerArms[i]);
}, delay = (100 + (i * 200)));
  }
  setTimeout(() => {
    process.stdout.write(lineBreak);
    }, 1900); 