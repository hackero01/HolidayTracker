export class Concedii{
    public dataInceput:Date;
    public dataFinal:Date;
    public nume:string;
    public grup:string;
    constructor(dataInceput:Date, dataFinal:Date,nume:string,grup:string){
        this.dataInceput=dataInceput;
        this.dataFinal=dataFinal;
        this.nume=nume;
        this.grup=grup;
    }
}