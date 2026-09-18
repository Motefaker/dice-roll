import { useState } from 'react';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;


function getDiceImage(value: DiceValue): string {
  switch(value) {
    case 1:
      return one;
    break;
    case 2:
      return two;
    break;
    case 3:
      return three;
    break;
    case 4: 
      return four;
    break;
    case 5:
      return five;
    break;
    case 6:
      return six;
    break;
    default: {
      const _exhaustiveCheck: never = value;
      return _exhaustiveCheck;
    }
  }
}

interface DiceProps {
  value: DiceValue;
}

function Dice({ value }: DiceProps) {
  return <img src= {getDiceImage(value)} alt = {`Dice showing ${value}`} className='w-70 m-3' />;
}

export default function DiceExample() {
const [value, setValue] = useState<DiceValue>(1);

const rollDice = () => {
  const next = (Math.floor(Math.random() * 6) + 1) as DiceValue;
  setValue(next);
}

return (
  <div>
    <Dice value={value} />
    <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 p-2' onClick={rollDice}>Roll</button>
  </div>
  );
}


