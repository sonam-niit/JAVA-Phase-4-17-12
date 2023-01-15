export class User{
    id: number;
    name:string;
    email:string;
    username:string;
    address:Address;
    phone:string;
    website:string;

}
export class Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo
}
export class Geo{
    lat:number;
    lng:number;
}