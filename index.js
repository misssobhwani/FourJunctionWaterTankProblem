

function bestBuildingCombination(n) {

  const theatreTime = 5, pubTime = 4, commercialParkTime = 10;
  const theatreEarnings = 1500, pubEarnings = 1000, commercialParkEarnings = 3000;


  let bestEarnings = 0;
  let bestCombination = { T: 0, P: 0, C: 0 };


  let cCount = Math.floor(n / commercialParkTime);
  let remainingTimeAfterC = n - cCount * commercialParkTime;

 
  let tCount = Math.floor(remainingTimeAfterC / theatreTime);
  let remainingTimeAfterT = remainingTimeAfterC - tCount * theatreTime;


  let pCount = Math.floor(remainingTimeAfterT / pubTime);


  let totalEarnings = cCount * commercialParkEarnings + tCount * theatreEarnings + pCount * pubEarnings;


  if (totalEarnings > bestEarnings) {
      bestEarnings = totalEarnings;
      bestCombination = { T: tCount, P: pCount, C: cCount };
  }

  console.log(`Time Unit: ${n}`);
  console.log(`Earnings: $${bestEarnings}`);
  console.log(`Solutions:`);
  console.log(`T: ${bestCombination.T} P: ${bestCombination.P} C: ${bestCombination.C}`);
}


bestBuildingCombination(7);  // example input
bestBuildingCombination(8);  // another example input
bestBuildingCombination(13); // another anothrt for time unit 13
