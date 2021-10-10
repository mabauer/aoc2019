import { assert } from 'chai';
import 'mocha';
import { compute_fuel, compute_fuel_including_fuel } from '../src/day01';


suite("Day01", () => {
  
    test("compute fuel for modules on example data", () => {
        assert.equal(compute_fuel(12), 2);
        assert.equal(compute_fuel(1969), 654);
        assert.equal(compute_fuel(100756), 33583);
    });

    test("compute fuel for modules (including fuel) on example data", () => {
        assert.equal(compute_fuel_including_fuel(12), 2);
        assert.equal(compute_fuel_including_fuel(1969), 966);
        assert.equal(compute_fuel_including_fuel(100756), 50346);
    });

  });