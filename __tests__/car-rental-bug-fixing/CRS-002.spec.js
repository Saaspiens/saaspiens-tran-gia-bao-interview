const { describe, test, expect } = global;
import { getTestCustomer } from "../../src/car-rental-bug-fixing/Utils";

describe('CRS-002', function () {
    test('a customer has 3 cars with id: 1,2,3 and has 2 rental. the one has 1,2 and duration 2, other has 3 and duration 4. Return 860', async function () {
        const name = 'Test';
        const customer = getTestCustomer(name);
        const totalFees = await customer.getTotalFees();
        return expect(totalFees).toBe(`Customer ${name}'s total fees is 860`);
    });

});
