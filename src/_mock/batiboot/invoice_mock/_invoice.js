import { add } from 'date-fns';
import { randomInArray, randomNumberRange } from '../../funcs';
import { Name, Address, Contact} from './invoiceTo'
import { invName, invAddress, invContact} from './invoiceFrom'
import { createDate, dueDate, itemDescription, actualCBM, rateCBM, totalAmount, orderStatus } from './items';
// ----------------------------------------------------------------------

const _mock = {
    id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
    invoiceFrom : {
        name: (index) => invName[index],
        address: (index) => invAddress[index],
        contact: (index) => invContact[index],
    },
    invoiceTo : {
        name: (index) => Name[index],
        address: (index) => Address[index],
        contact: (index) => Contact[index],
    },
    items: {
        createDate: (index) => createDate[index],
        dueDate: (index) => dueDate[index],
        itemDescription: (index) => itemDescription[index],
        actualCBM: (index) => actualCBM[index],
        rateCBM: (index) => rateCBM[index],
        totalAmount: (index) => totalAmount[index],
        orderStatus: (index) => orderStatus[index]
    },
}




export const _invoices = [...Array(_mock.items.length)].map((_, index) => ({
    id: _mock.id(index),
    invoiceNumber: `${17048 + index}`,
    rateCBM: _mock.items.rateCBM(index),
    totalAmount: _mock.items.totalAmount(index),
    createDate: _mock.items.createDate(index),
    dueDate: _mock.items.dueDate(index),
    orderStatus: _mock.items.orderStatus(index),
    actualCBM : _mock.items.actualCBM(index),
    invoiceFrom: {
        id: _mock.id(index),
        name: _mock.invoiceFrom.name(index),
        address: _mock.invoiceFrom.address(index),
        contact: _mock.invoiceFrom.contact(index),
    },
    invoiceTo: {
        id: _mock.id(index),
        name: _mock.invoiceTo.name(index),
        address: _mock.invoiceTo.address(index),
        contact: _mock.invoiceTo.contact(index),
    },
    items: {
        id: _mock.id(index),
        createDate: (index) => _mock.items.createDate[index],
        dueDate: (index) => _mock.items.dueDate[index],
        itemDescription: (index) => _mock.items.itemDescription[index],
        actualCBM: (index) => _mock.items.actualCBM[index],
        rateCBM: (index) => _mock.items.rateCBM[index],
        totalAmount: (index) => _mock.items.totalAmount[index],
        orderStatus: (index) => _mock.items.orderStatus[index]
        }
    }
))

export const _invoiceAddressFrom = [...Array(_mock.items.length)].map((_, index) => ({
    id: _mock.id(index),
    name: _mock.invoiceFrom.name(index),
    address: _mock.invoiceFrom.address(index),
    contact: _mock.invoiceFrom.contact(index),
  }));
  
export const _invoiceAddressTo = [...Array(_mock.items.length)].map((_, index) => ({
    id: _mock.id(index),
    name: _mock.invoiceTo.name(index),
    address: _mock.invoiceTo.address(index),
    contact: _mock.invoiceTo.contact(index),
}));