


function formatString(input: string, toUpper?: boolean): string{

  if(toUpper){
    return input.toUpperCase();
  }
  return input.toLowerCase();

}



const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{

  const result = items.filter((item)=> item.rating>=4);
  return result;
}


function contactArrays<T>(...arrays: T[][]): T[] {
  
  const ans = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      ans.push(arrays[i][j]);
    }
  }

  return ans;
}


class Vehicle {

  make:string;
  year:number;
  constructor(make:string, year:number){
    this.make=make;
    this.year=year;

  }
  getInfo(){

    console.log(`Make:${this.make} ,Year: ${this.year}`)

  }

}

class Car extends Vehicle{


  constructor(make:string, year:number,private model:string){
    super(make,year);
    this.model=model;

  }

  getModel(){
    console.log(`Model: ${this.model}`)
  }
}



function processValue(value: string | number): number{

  if(typeof value==='string'){
    return value.length;
  }else{
    return value*2;
  }
}






interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let productsPrice: Array<number> = [];

  products.forEach((item) => {
    productsPrice.push(item.price);
  });

  let maxPrice = productsPrice[0];

  for (let i = 0; i < productsPrice.length; i++) {
    if (productsPrice[i] > maxPrice) {
      maxPrice = productsPrice[i];
    }
  }

  const result = products.find((item) => item.price === maxPrice);

  return result || null;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string{

    if(day===Day.Saturday  ||
        day===Day.Sunday
    ){
        return "Weekend"

    }else{
        return "Weekday"

    }

}

async function squareAsync(n: number): Promise<number> {

 return new Promise((resolve, reject) => {
    if (n >= 1) {
      setTimeout(() => {
        return resolve(n * n);
      }, 1000);
    } else {
      return reject( new Error("Negative number not allowed"));
    }
  });


}



