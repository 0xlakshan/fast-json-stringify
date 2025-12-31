import JSONOptimizer from '../src/index.js';

const optimizer = new JSONOptimizer();

const data = {
  name: 'John',
  age: 30,
  items: ['a', 'b', 'c']
};

const result = optimizer.validate(data);
console.log(result);

