let timeTotal = 109
let timeRun = 19.5
let timeWalk = timeTotal - timeRun
let runPercentage = (timeRun * 100) / timeTotal
let walkPorcentage = (timeWalk * 100) / timeTotal

console.log(`Tempo total: ${timeTotal}min - (100%)`);
console.log(`Tempo Caminhando: ${timeWalk}min - (${walkPorcentage.toFixed(2)}%)`);
console.log(`Tempo Correndo: ${timeRun}min - (${runPercentage.toFixed(2)}%)`);
