// const message: string = 'hello world';
// console.log(message)

// let count = 0; // 숫자
// count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

// const message: string = 'hello world'; // 문자열

// const done: boolean = true; // 불리언 값

// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// color = 'green'; // 에러 발생!

// const sum = (x: number, y: number): number => {
//   return x + y;
// };

// console.log(sum(1, 2));

// const sumArray = (numbers: number[]): number => {
//   return numbers.reduce((acc, current) => acc + current, 0);
// };

// const total = sumArray([1, 2, 3, 4, 5]);
// console.log(total);

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"

const rect = { x: 33, y: 26, z: 89 };
printPoint(rect); // prints "33, 3"

const color = { hex: "#187ABF" };

// printPoint(color); // X

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new VirtualPoint(13, 56);
printPoint(newPoint); // prints "13, 56"
