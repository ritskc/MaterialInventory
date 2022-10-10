export class Customer {

    constructor() {
        this.shippingInfos = [];
        this.shippingInfos.push(new ShippingInfo());
    }

    id: number = 0;
    companyId: number = 1;
    name: string='';
    addressLine1: string='';
    city: string='';
    state: string='';
    zipCode: string='';
    contactPersonName: string='';
    telephoneNumber: string='';
    faxNumber: string='';
    emailAddress: string='';
    truckType: string='';
    collectFreight: string='';
    comments: string='';
    surcharge: number = 0;
    fob: string='';
    terms: string='';
    rePackingCharge: number = 0;
    rePackingPoNo: string = ''
    shipVia: string='';
    invoicingtypeid: number = 0;
    endCustomerName: string='';
    displayLineNo: boolean=false;
    billing: string='';
    shippingInfos: ShippingInfo[];
}

export class ShippingInfo {
    id: number = 0;
    customerID: number=0;
    name: string='';
    contactPersonName: string='';
    addressLine1: string='';
    city: string='';
    state: string='';
    zipCode: string='';
    isDefault: boolean=false;
}