export class LoginModel {
    public id: number = 0;
    public userName: string = '';
    public password: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public eMail: string = '';
    public token: string = '';
    
    constructor(init?: Partial<LoginModel>) {
        Object.assign(this, init);
    }
}
