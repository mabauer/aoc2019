#!/usr/bin/env ts-node

import { read_inputfile } from './utils'

class Computer {

    memory: number[];
    ip: number = 0;

    constructor(code: number[]) {
        this.memory = code.slice();
    } 

    execute_stmt(): any  {
        const opcode = this.memory[this.ip];
        const operand1 = this.memory[this.memory[this.ip+1]];
        const operand2 = this.memory[this.memory[this.ip+2]];
        let result = 0;
        if (opcode == 1) {
            result = operand1 + operand2;
        } else if (opcode == 2) {
            result = operand1 * operand2;
        } else {
            return;
        }
        this.memory[this.memory[this.ip+3]] = result;
        this.ip += 4;
    }
    run(input1?:number, input2?: number): number {
        if (input2)
            this.memory[2] = input2;
        if (input1)
            this.memory[1] = input1;
        while (this.memory[this.ip] != 99) {
            this.execute_stmt();
            // this.dump();
        }
        return this.memory[0];
    }

    peek(addr: number): number {
        return this.memory[addr];
    }

    dump() {
        console.log(`${this.ip}: ${this.memory}`);
    }
}

function part1(lines : string[]) {
    const numbers = lines.join().split(",").map(Number);
    const computer = new Computer(numbers);
    const result = computer.run(12, 2);
    return result;
}

function part2(lines : string[]) {
    const numbers = lines.join().split(",").map(Number);
    for (let noun = 0; noun <=99; noun++) {
        for (let verb = 0; verb <=99; verb++) {
            const computer = new Computer(numbers);
            const result = computer.run(noun, verb);
            console.log(`${noun}, ${verb}: ${result}`)
            if (result == 19690720)
                return noun * 100 + verb;
        }
    }
    throw new Error('Could compute result from inputs!');
}
 

async function main() {
    const lines = await read_inputfile("input02.txt")
    const result1 = part1(lines);
    console.log(`The answer for part one is: ${result1}`)  
    const result2 = part2(lines);
    console.log(`The answer for part one is: ${result2}`)  
}

main();

export { Computer };