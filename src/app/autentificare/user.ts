export class User{
    public grup:string;
    public username:string;
    public password:string;
    constructor(grup:string, username:string,password:string){
        this.username=username;
        this.password=password;
        this.grup=grup;
    }
}