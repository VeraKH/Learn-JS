// --- Resolving Expressions ---
// Task 1: Experiment with different arithmetic expressions
console.log(typeof (3 * '5')); // What happens when a string is multiplied by a number?
console.log(typeof ('5' - 2)); // What happens when a string is subtracted by a number?
console.log(typeof ("5" ** 2)); // What happens when a string is exponentiated?
console.log(typeof (5 + 3 * 2)); // What happens when multiplication is done before addition?

// Task 2: Investigate logical operators with different data types
// 0 -> FALSE, Null -> Falsy, '' -> Falsy, [] -> True
console.log(false && "apple"); // What is the result of AND between boolean and string? It returns the first falsy value. If both operands are truthy, it returns the last value.
console.log(true || 0); // What happens when OR is used between boolean and number?
console.log('hello' && 10); // What happens when AND is used between string and number? Returns first FALSE or LAST true
console.log(null || 7); // What happens when OR is used with null? It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log('' || 7); // What happens when OR is used with null? It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log([] || 7); // What happens when OR is used with null? It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log(null == undefined); // When using the == (loose equality) operator in JavaScript, type coercion occurs. This means JavaScript tries to convert the values to the same type before comparing them.
console.log(null === undefined);

