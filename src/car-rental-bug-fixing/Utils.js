import Customer from "./Customer";
import Rental from "./Rental";
import Car from "./Car";

export function getTestCustomer(name) {
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

export function getCarFees(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            let fee = 0;
            switch (id) {
                case 1:
                    fee = 70;
                    break;
                case 2:
                    fee = 100;
                    break;
                case 3:
                    fee = 130;
                    break;
            }
            resolve(fee);
        }, 200)
    })
}
