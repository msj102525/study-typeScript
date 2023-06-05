"use strict";
// console.clear();
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
//# sourceMappingURL=studyTs.js.map