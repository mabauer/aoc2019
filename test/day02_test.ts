import { assert } from 'chai';
import 'mocha';
import {Computer } from '../src/day02';


suite("Day02", () => {
  
    test("execute single statement", () => {
        const computer = new Computer([1,9,10,3,2,3,11,0,99,30,40,50]);
        computer.execute_stmt();
        assert.equal(computer.peek(3), 70);
        computer.execute_stmt();
        assert.equal(computer.peek(0), 3500);
    });

    test("run program", () => {
        const computer = new Computer([1,9,10,3,2,3,11,0,99,30,40,50]);
        computer.run();
        assert.equal(computer.peek(0), 3500);
    });

    test("run self modifying program", () => {
        const computer = new Computer([1,1,1,4,99,5,6,0,99]);
        computer.run();
        assert.equal(computer.peek(), 30);
        assert.equal(computer.peek(4), 2); // 30,1,1,4,2,5,6,0,99
    });


});