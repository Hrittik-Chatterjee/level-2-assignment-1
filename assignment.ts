
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      const result = input.toUpperCase();
      console.log(result);
      return result;
    } else {
      const result = input.toLowerCase();
      console.log(result);
      return result;
    }
  }
  
  formatString("Hello"); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  formatString("Hello", false); // Output: "hello"
  

  

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredItems = items.filter((item) => item.rating >= 4);
    console.log(filteredItems)
    return filteredItems
    
 }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books); // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]





function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray= arrays.reduce((acc, curr) => acc.concat(curr), []);
    console.log(newArray)
    return newArray;
}


concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]



class Vehicle {
private make: string
private year: number
  
constructor(make:string, year:number){
    this.make=make,
      this.year =year
 }
getInfo(){
    console.log(`Make:${this.make}, Year:${this.year}`)
 }
}
  
class Car extends Vehicle {
    private model : string
  
    constructor( make:string, year:number,model:string,){
      super(make, year);
      this.model = model
    }
  getInfo(){
    super.getInfo()
  }
  
  getModel(){
    console.log(`Model:${this.model}`)
  }
  
  }
  
  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
  myCar.getModel();  // Output: "Model: Corolla"
  
  



  function processValue(value: string | number): number {
    if(typeof value === 'string'){
      console.log(value.length)
      return value.length
    } else{
      console.log(value*2)
      return value*2
    }
  }
  
  processValue("hello"); // Output: 5
  processValue(10);      // Output: 20





interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
   if(products.length === 0){
    return null
   }else{
    const highestPrice = products.reduce((max, product) =>
        product.price > max ? product.price : max, 0
      );

      const filterMostExpensiveProduct = products.filter((product) => product.price === highestPrice);
      const mostExpensiveProduct= filterMostExpensiveProduct[0]
      console.log(mostExpensiveProduct)
      return mostExpensiveProduct;
   }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];


  
  getMostExpensiveProduct(products);  //   Output: { name: "Bag", price: 50 }





  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        const weekend = "Weekend"
        console.log(weekend)
        return weekend;
      }
      const weekday = "Weekday"
      console.log(weekday)
      return weekday;
  }

  getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"
 




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
       
          if (n > 0) {
            return resolve(n * n);
          
          } else {
            reject("Error: Negative number not allowed");
          }
        }, 1000); 
      });
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed