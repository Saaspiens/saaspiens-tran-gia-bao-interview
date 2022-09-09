import Car from '../src/car-rental-bug-fixing/Car';
import Rental from '../src/car-rental-bug-fixing/Rental';
import Customer from '../src/car-rental-bug-fixing/Customer';

function getTestCustomer(name) {
    return new Customer(name, [
        new Rental(
            [
                new Car(1, 'A'), 
                new Car(2, 'B')
            ],
            2
        ),
        new Rental(
            [
                new Car(3, 'C')
            ],
            4
        )
    ])
}

export {
    getTestCustomer
}