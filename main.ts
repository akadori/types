type A = {
  a: number,
  aa: number
}
type B = {
  b: number,
  bb: number
}
type AB = {
  a: number,
  b: number,
}

type C = Exclude<keyof A, keyof AB> // "aa"
type WithuoutAB = Without<A, AB>
const aa: WithuoutAB = {
  aa: undefined
}
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

interface Person {ethnicity: string;}
interface Pet {breed: string;}
function getOrigin(value: XOR<Person, Pet>) { /* ... */}

// getOrigin({}); //Error
getOrigin({ethnicity: 'abc'}); //OK
getOrigin({breed: 'def'}); //OK
// getOrigin({ethnicity: 'abc', breed: 'def'});//Error

const foo: XOR<"string", "string2"> = "string"

const bar: XOR<{id: string, name: string}, {type: string, value: any}> = {id: "dddd", name: "llllll"}
// const bar2: XOR<{id: string, name: string}, {type: string, value: any}> = {id: "dddd", type: "llllll"}