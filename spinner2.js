let count = 100;
while (count <= 1900) {
  if (count === 100 || count === 900 || count === 1700) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, count);
  }
  else if (count === 300 || count === 1100) {
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, count);
  }
  else if (count === 500 || count === 1300) {
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, count);
  }
  else if (count === 700 || count === 1500) {
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   '); 
    }, count);
  }
  else if (count = 1900) {
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\n'); 
    }, count);
  }
  count += 200;
}















setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\/   '); 
}, 1100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r-   '); 
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\   '); 
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 1700);

