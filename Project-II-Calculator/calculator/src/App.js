import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Num from './components/ButtonComponents/NumberButton';
import Action from './components/ButtonComponents/ActionButton';

let nums = [
  {
    class: 'seven',
    number: '7'
  },
  {
    class: 'eight',
    number: '8'
  },
  {
    class: 'nine',
    number: '9'
  },
  {
    class: 'four',
    number: '4'
  },
  {
    class: 'five',
    number: '5'
  },
  {
    class: 'six',
    number: '6'
  },
  {
    class: 'one',
    number: '1'
  },
  {
    class: 'two',
    number: '2'
  },
  {
    class: 'three',
    number: '3'
  },
  {
    class: 'zero',
    number: '0'
  }
];

let act = [
  {
    class: 'clear',
    text: 'clear'
  },
  {
    class: 'divide',
    text: '/'
  },
  {
    class: 'mult',
    text: 'X'
  },
  {
    class: 'subtract',
    text: '-'
  },
  {
    class: 'add',
    text: '+'
  },
  {
    class: 'equals',
    text: '='
  },
]

function App() {
  return (
    <div className='container'>
      <Display />
      {nums.map(num => (<Num text={num} />))}
      {act.map(action => (<Action act={action} />))}
    </div>
  );
};

export default App;
