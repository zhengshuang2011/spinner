const spinners = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (let i = 0; i < spinners.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinners[i]}   `);
  }, 100 + 200 * i);
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1900);
