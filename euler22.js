function namesScores(data) {
    let names = data.replace(/\"/g, "").split(",");
    let sorted = names.sort((a, b) => a.localeCompare(b));
  
    let totalScores = sorted
      .map((n, i) => n.split("").reduce((ac, next) => ac + next.charCodeAt(0) - 64, 0))
      .map((n, i) => n * (i + 1))
      .reduce((ac, n) => ac + n, 0);
  
    console.log( totalScores );
  }