

What are some differences between interfaces and types in TypeScript?



declaration type in typescripts

type User={
name:string;
age:number;
}

declaration interface in typescripts

interface User{
name:string;
age:number
}

 * Interface can re-decaler but type can not be re-decler

Interface Example:

interface Info { name:string};
interface Info { age:number } ;
/// not gave me error

Type Example :

type Info ={ name:string};
type Info = {age:number};
// here thow error


when we need more type we can add but type and interface diffrent way

type how add new type using intersection

type User={
name:string;
}

type User2 = {
age:number;
}

type ManiUser = User & User2;


In interface use extends 

interface 

interface User {
name:string;
}

interface mainUser extends User{
age:number;

}

 





What is the use of the keyof keyword in TypeScript? Provide an example.


The keyof operator takes an object type and produces a string or numeric literal union of its keys



type User ={
    name:string,
    age:number;
  }

  type User2= keyof User;

  const str :User2='name'







