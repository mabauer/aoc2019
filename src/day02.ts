
enum OPCODE {
    ADD = 1,
    MULT = 2,
    STOP = 99,
}

class Computer {

    private memory: number[];
    private ip: number = 0;

    constructor(code: number[]) {
        this.memory = code.slice();
    } 

    execute_stmt(): void  {
        const opcode = this.peek(this.ip);
        const operand1 = this.peek(this.peek(this.ip+1));
        const operand2 = this.peek(this.peek(this.ip+2));
        let result = 0;
        if (opcode == OPCODE.ADD) {
            result = operand1 + operand2;
        } else if (opcode == OPCODE.MULT) {
            result = operand1 * operand2;
        } else {
            return;
        }
        this.poke(this.peek(this.ip+3), result);
        this.ip += 4;
    }

    run(input1?:number, input2?: number): number {
        if (input2)
            this.poke(2, input2);
        if (input1)
            this.poke(1, input1);
        while (this.peek(this.ip) != OPCODE.STOP) {
            this.execute_stmt();
            if (this.ip > this.memory.length)
                break;
                // throw new Error("Unexpected end of program -- STOP opcode missing!")
            // this.dump();
        }
        return this.memory[0];
    }

    peek(addr?: number): number {
        if (!addr)
            addr = 0;
        return this.memory[addr];
    }

    poke(addr: number, value: number) {
        this.memory[addr] = value;
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

export { part1, part2, Computer };