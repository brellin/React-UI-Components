import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Num from './components/ButtonComponents/NumberButton';
import Action from './components/ButtonComponents/ActionButton';

let nums = [
  {
    class: 'button seven',
    number: '7'
  },
  {
    class: 'button eight',
    number: '8'
  },
  {
    class: 'button nine',
    number: '9'
  },
  {
    class: 'button four',
    number: '4'
  },
  {
    class: 'button five',
    number: '5'
  },
  {
    class: 'button six',
    number: '6'
  },
  {
    class: 'button one',
    number: '1'
  },
  {
    class: 'button two',
    number: '2'
  },
  {
    class: 'button three',
    number: '3'
  },
  {
    class: 'button zero',
    number: '0'
  }
];

let act = [
  {
    class: 'button clear',
    text: 'clear'
  },
  {
    class: 'button fas fa-divide divide',
    text: ''
  },
  {
    class: 'button mult',
    text: 'X'
  },
  {
    class: 'button subtract',
    text: '-'
  },
  {
    class: 'button add',
    text: '+'
  },
  {
    class: 'button equals',
    text: '='
  },
]

let input = 0;

function App() {
  return (
    <div className='container'>
      <Display input={input} />
      {nums.map(num => (<Num text={num} onClick={function () {
        return input = input + num.number;
      }} />))}
      {act.map(action => (<Action act={action} />))}
    </div>
  );
};

export default App;
