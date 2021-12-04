
function compute_fuel(m: number) {
    return Math.floor(m/3) - 2;
}

function compute_fuel_including_fuel(m: number) {
    let fuel = 0
    let mass_to_consider = m;
    while (mass_to_consider > 0) {
        mass_to_consider = compute_fuel(mass_to_consider);
        // console.log(mass_to_consider)
        if (mass_to_consider > 0)
            fuel += mass_to_consider;
    }
    return fuel;
}

function part1(lines : string[]) {
    var result = 0;
    for (const line of lines) {
        if (line) {
            const mass = Number(line);
            const fuel = compute_fuel(mass);
            // console.log(`${mass} requires ${fuel}`);
            result += fuel;
        }
    }
    return result;
}

function part2(lines : string[]) {
    var result = 0;
    for (const line of lines) {
        if (line) {
            const mass = Number(line);
            const fuel = compute_fuel_including_fuel(mass);
            // console.log(`${mass} requires ${fuel}`);
            result += fuel;
        }
    }
    return result;
}

export {part1, part2, compute_fuel, compute_fuel_including_fuel };