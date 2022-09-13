const { describe, test, expect } = global;
import { getTestCustomer } from "../../src/car-rental-bug-fixing/Utils";

describe('CRS-003', function () {
    test('a customer has 3 cars with id: 1,2,3 and has 2 rental. the one has 1,2 and duration 2, other has 3 and duration 4. Return 340 and 520', async function () {
        const name = 'Test';
        const customer = getTestCustomer(name);
        const detailedFees = await customer.getDetailedFees();
        const expectedResult = [`Fees for Rental Number 1 is 340`, `Fees for Rental Number 2 is 520`];
        let result = detailedFees.length === expectedResult.length;
        for(let i = 0; i < Math.min(detailedFees.length, expectedResult.length); i++)
        {
            result &= expect(detailedFees[i]).toBe(expectedResult[i]);
        }
        return result;
    });

});
