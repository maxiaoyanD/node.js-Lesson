console.log(process.platform);
console.log(process.pid);
console.log(process.argv[0]);
console.log(process.cwd());
//(5)在控制台输出ChromeV8的内存占用情况
console.log(process.memoryUsage().heapUsed);