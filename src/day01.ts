#!/usr/bin/env ts-node

import { read_inputfile } from './utils'

function compute_fuel(m: number) {
    return Math.floor(m/3) - 2;
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

async function main() {
    const lines = await read_inputfile("input01.txt")
    const result = part1(lines);
    console.log(`The answer for part one is: ${result}`)    
}

main();

export {compute_fuel };