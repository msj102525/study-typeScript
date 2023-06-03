console.clear();
// class Product {
//   name: "";
//   price = 0;
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class TV extends Product {
//   size = "";
//   constructor(name, price, size) {
//     super(name, price);
//     this.size = size;
//   }
//   getPrice() {
//     return this.price + "만원";
//   }
//   setPrice(price) {
//     if (price < 0) {
//       throw Error("마이너스값 안됨");
//     }
//     this.price = price;
//   }
// }

// let tv1 = new TV("댕동", 200, "56inch");

// tv1.setPrice(1000);

// console.log(`tv1`, tv1.getPrice());
// ==========================================

// function add(num1: number, num2: number) {
//   console.log(num1 + num2);
// }

// // add();
// // add(1);
// add(1, 2);
// add(3,4,5);
// add("heollo", "world");

//   function showItems(arr:string[]) {
//     arr.forEach((item) => {
//         console.log(item);
//     })
//   }
//   showItems([1,2,3]);
//   showItems(["안녕", "나는", "승종"]);

// let a: number = 3;
// let b: string = "love you";

// let c: any = 2;

// let d: number | string = "hi";
// console.log(a, b, c, d);

// const addNumber = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(addNumber(2, 2));

// type Score = "A" | "B" | "C" | "D" | "F";

// interface User {
//   name: string;
//   age: number;
//   gender?: string;
//   readonly birthYear: number;
//   [grade: number]: Score;
// }
// let user: User = {
//   name: "xx",
//   age: 30,
//   // gender: "male",
//   birthYear: 19980711,
//   1: "A",
//   2: "B",
// };

// user.age = 26;
// user.name = "댕동";
// // user.birthYear = 980711;

// console.log(user);

// interface Add {
//   (num1: number, num2: number): number;
// }
// const add: Add = (x, y) => {
//   return x + y;
// };

// console.log(add(1, 2));

// interface IsAdult {
//   (age: number): boolean;
// }
// const a: IsAdult = (age) => {
//   return age > 19;
// };
// console.log(a(33));

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}
const benz: Benz = {
  door: 5,
  stop() {
    console.log("stop");
  },
  color: "black",
  wheels: 4,
  start() {},
};

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }

  start(): void {
    console.log("부릉부릉");
  }
}

const a = new Bmw("black");

console.log(a);
a.start();
console.log(benz);
benz.stop();
