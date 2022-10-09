export class Supplier {
     public id: number = 0;
    public companyId:number = 0;
    public name: string = '';
    public contactPersonName: string = '';
    public phoneNo: string = '';
    public emailID: string = '';
    public address: string = '';
    public city: string = '';
    public state: string = '';
    public country:string = '';
    public zipCode: string = '';
    public faxNo: string = '';
    
    constructor(init?: Partial<Supplier>) {
        Object.assign(this, init);
    }
}
