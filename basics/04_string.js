let name="Arabinda";
let repoCount= 50;
console.log(name+repoCount+"Value");
console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hello-there');
console.log(gameName[0]);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne.trim());

const url="https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11";
console.log(url.replaceAll('=','-'));
console.log(gameName.split('-'));
