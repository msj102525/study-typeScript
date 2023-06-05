// console.clear();

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

// interface Car {
//   color: string;
//   wheels: number;
//   start(): void;
// }

// interface Benz extends Car {
//   door: number;
//   stop(): void;
// }
// const benz: Benz = {
//   door: 5,
//   stop() {
//     console.log("stop");
//   },
//   color: "black",
//   wheels: 4,
//   start() {},
// };

// class Bmw implements Car {
//   color;
//   wheels = 4;

//   constructor(c: string) {
//     this.color = c;
//   }

//   start(): void {
//     console.log("부릉부릉");
//   }
// }

// const a = new Bmw("black");

// console.log(a);
// a.start();
// console.log(benz);
// benz.stop();

// 함수

// function heollo(name?: string) {
//   return `Hello, ${name || "world"}`;
// }

// const result = heollo("문댕동");
// console.log(result);

// function hello(name: string, age?: number): string {
//   if (age !== undefined) {
//     return `Hello, ${name}. You are ${age}.`;
//   } else {
//     return `Hello, ${name}`;
//   }
// }

// console.log(hello("Moon"));
// console.log(hello("Moon", 26));

// function add(...nums: number[]) {
//   return nums.reduce((result, num) => result + num, 0);
// }

// const a = add(1, 2, 3); //6
// console.log(a);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

// interface User {
//   name: string;
// }

// const moon: User = { name: `Moon` };

// function showName(this: User, age: number, gender: "m" | "f") {
//   console.log(this.name, age, gender);
// }

// const a = showName.bind(moon);
// a(26, "m");

// interface User {
//   name: string;
//   age: number;
// }
// function join(name: string, age: number): User;
// function join(name: string, age: string): string;
// function join(name: string, age: number | string): User | string {
//   if (typeof age == "number") {
//     return {
//       name,
//       age,
//     };
//   } else {
//     return "나이는 숫자로 입력 부탁";
//   }
// }
// const a: User = join("WinBell", 26);

// console.log(a);

// Literal Types

// const userName1 = "Bob";
// let userName2: string | number = "Tom";

// userName2 = 3;

// type Job = "police" | "developer" | "teacher";

// interface User {
//   name: string;
//   job: Job;
// }

// const user: User = {
//   name: "door",
//   job: "police",
// };

// interface HighSchoolStudent {
//   name: number | string;
//   grade: 1 | 2 | 3;
// }

// // Ucion Types

// interface Car {
//   name: "car";
//   color: string;
//   start(): void;
// }

// interface Mobile {
//   name: "mobile";
//   color: string;
//   call(): void;
// }

// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "car") {
//     gift.start();
//   } else {
//     gift.call();
//

// Intersection Types

// interface Car {
//   name: string;
//   start(): void;
// }

// interface Toy {
//   name: string;
//   color: string;
//   price: number;
// }

// const toyCar: Toy & Car = {
//   name: "타요",
//   start() {},
//   color: "black",
//   price: 1000,
// };

// class Car {
//   // color: string;
//   constructor(readonly color: string) {
//     this.color = color;
//   }
//   start() {
//     console.log("start");
//   }
// }

// const bmw = new Car("red");

// 접근 제한자(Access modifier) - public, private, protected
// public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// protected - 자식 클래스에서 접근 가능
// private - 해당 클래스 내부에서만 접근 가능
// class Car {
//   readonly name: string = "car";
//   color: string;
//   static wheels = 4;
//   constructor(color: string, name: string) {
//     this.color = color;
//     this.name = name;
//   }
//   start() {
//     console.log("start");
//     console.log(this.name);
//     console.log(Car.wheels);
//   }
// }

// class Bmw extends Car {
//   constructor(color: string, name: string) {
//     super(color, name);
//   }
//   showName() {
//     console.log(super.name);
//   }
// }

// const z4 = new Bmw("Black", "dad");
// // z4.name = "dadada";
// console.log(z4, Car.wheels);

// 추상 class

// abstract class Car {
//   color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   start() {
//     console.log("start");
//   }
//   abstract doSomething(): void;
// }

// class Bmw extends Car {
//   constructor(color: string) {
//     super(color);
//   }
//   doSomething() {
//     // alert(3);
//   }
// }
// const z4 = new Bmw("Black");

// function getSize(arr: number[] | string[] | boolean[] | object[]): number {
//   return arr.length;
// }

// function getSize<T>(arr: T[]): number {
//   return arr.length;
// }
// const arr1 = [1, 2, 3];
// const a = getSize<number>(arr1);

// const arr2 = ["a", "b", "c"];
// const b = getSize<string>(arr2);

// const arr3 = [false, true, true];
// const c = getSize<boolean>(arr3);

// const arr4 = [{}, {}, { name: "door" }];
// const d = getSize<object>(arr4);

// console.log(a, b, c, d);

// interface Mobile<T> {
//   name: string;
//   price: number;
//   option: T;
// }

// const m1: Mobile<{ color: string; coupon: boolean }> = {
//   name: "s21",
//   price: 1000,
//   option: {
//     color: "red",
//     coupon: false,
//   },
// };

// const m2: Mobile<string> = {
//   name: "20",
//   price: 900,
//   option: "good",
// };

// interface User {
//   name: string;
//   age: number;
// }

// interface Car {
//   name: string;
//   color: string;
// }

// interface Book {
//   price: number;
// }

// const user: User = { name: "a", age: 10 };
// const car: Car = { name: "bmw", color: "red" };
// const book: Book = { price: 1000 };

// function showName<T extends { name: string }>(data: T): string {
//   return data.name;
// }

// showName(user);
// showName(car);
// // showName(book);

// keyof
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// type UserKey = keyof User; // 'id' | 'name'| 'age' | 'gender'

// const uk: UserKey = "id";

// Partial<T>

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// // interface User {
// //   id?: number;
// //   name?: string;
// //   age?: number;
// //   gender?: "m" | "f";
// // }

// let admin: Partial<User> = {
//   id: 1,
//   name: "Door",
// };

// Required<T>
// interface User {
//   id: number;
//   name: string;
//   age?: number;
// }

// let admin: Required<User> = {
//   id: 1,
//   name: "door",
//   age: 26,
// };

// Readonly<T>

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// let admin: Readonly<User> = {
//   id: 1,
//   name: "dada",
// };

// admin.id = 4;

// Pick
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// const admin: Pick<User, "id" | "name"> = {
//   id: 0,
//   name: "dads",
// };

// Omit
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// const admin: Omit<User, "age" | "gender"> = {
//   id: 0,
//   name: "dads",
// };

// Exclude<T1, T2>

// type T1 = string | number;
// type T2 = Exclude<T1, number> | string;

// NonNullAble<Type>

// type T1 = string | null | undefined | void;
// type T2 = NonNullable<T1>;

// =================================================

// interface Info {
//   name: string;
//   age: number;
//   lang: string;
// }

// const person1 = {
//   name: "DoorWinBell",
//   age: 26,
//   lang: "typescript",
// };

// const helloMaster = (person: Info): void => {
//   console.log(
//     `Hello ${person.name}, you are ${person.age}, Wellcome ${person.lang}!`
//   );
// };

// helloMaster(person1);

// const listA: number[] = [1, 2, 3];
// const listB: Array<number> = [1, 2, 3];

// let num: number | undefined = undefined;
// num = 123;

// let num: 1 | 2 | 3;
// num = 1;
// // num = 4;

// let data: any;
// data = "Hello world";

// let dataLength1: number = (<string>data).length;

// let dataLength2: number = (data as string).length;
// console.log(dataLength1, dataLength2);

// ------------------------------------------

// type Person = {
//   name: string;
//   age: number;
// };

// type PersonDetails = {
//   name: string;
//   age: number;
//   address: string;
// };

// interface Person {
//   name: string;
//   age: number;
// }

// interface PersonDetails extends Person {
//   address: string;
// }

// type Person = {
//   name: string;
//   age: number;
// };

// type PersonDetails = Person & { address: string };

// 중복일 때
type Person = {
  name: string;
  age: number;
  address1: string;
  address2: string;
  gender: string;
  image: string;
  hobby: string[];
};

// 1 XX
// type PersonSummary = {
//   name: string;
//   gender: string;
//   image: string;
// };

// 2
// type PersonSummary = {
//   name: Person["name"];
//   age: Person["age"];
//   image: Person["image"];
// };

// 3
// type PersonSummary = {
//   [k in "name" | "gender" | "image"]: Person[k];
// };

// 4
// type Pick<T, K> = { [k in k]: T[k] };
// type PersonSummary = Pick<Person, "name" | "gender" | "image">;

// 중복피하기 개인정보 수정

// type PersonUpdate = {
//   name?: string;
//   age?: number;
//   address1?: string;
//   address2?: string;
//   gender?: string;
//   image?: string;
//   hobby?: string[];
// };
// --->

// type PersonUpdate = { [k in keyof Person]?: Person[k] };

// type PersonUpdate = Partial<Person>;
