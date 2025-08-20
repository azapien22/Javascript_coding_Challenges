// Here’s a simple JavaScript program that checks which years between 2014 and 2050 have January 1st on a Sunday:

for (let year = 2014; year <= 2050; year++) {
    const isSunday = new Date(year, 0, 1).getDay() === 0; // 0 represents Sunday
    if (isSunday) {
        console.log(`January 1st is a Sunday in ${year}.`); 
    }
}