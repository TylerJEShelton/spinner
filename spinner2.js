const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timeout = 100;
spinnerArray.forEach(element => {
  setTimeout(() => {
    process.stdout.write(element);
  }, timeout);
  timeout += 200;
});
setTimeout(() => {
  console.log();
}, timeout);