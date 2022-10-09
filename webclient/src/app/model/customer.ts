export class Customer {
    public id: number = 0;
   public companyId:number = 0;
   public name: string = '';
   public addressLine1: string = '';
   public phoneNo: string = '';
   public emailAddress: string = '';
   public address: string = '';
   public city: string = '';
   public state: string = '';
   public telephoneNumber: string = ''; 
   public zipCode: string = ''; 
   
   constructor(init?: Partial<Customer>) {
       Object.assign(this, init);
   }
}

