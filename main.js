let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let runnerAge = 50;
if (runnerAge > 18 && early){
  raceNumber += 1000;
}
if (runnerAge > 18 && early){
  console.log(`This runner will begin their race at 9:30am: ${raceNumber}`);
}
else if (runnerAge > 18 && !early){
  console.log(`This runner is late! Their race will begin at 11:00am: ${raceNumber}`);
}
else if (runnerAge < 18){
  console.log(`Youth runner will begin their race at 12:30pm: ${raceNumber} `);
}
else{
  console.log('Runner must see registration desk!');
}

