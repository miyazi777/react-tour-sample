import './App.css';
import { useState } from 'react';
import Tour from 'reactour';

function App() {

  const [isOpen, setOpen] = useState(false);

  const handleStart = () => {
    setOpen(!isOpen);
    console.log('handle start', isOpen);
  }

  const steps = [
    {
      selector: '[data-tut="reactour__step1"]',
      content: 'step1',
    },
    {
      selector: '[data-tut="reactour__step2"]',
      content: 'step2',
    },
    {
      selector: '[data-tut="reactour__step3"]',
      content: 'step3',
    },
  ];

  return (
    <div>
      <p>react tour test</p>
      <button onClick={handleStart}>start</button>
      <div data-tut="reactour__step1" style={{marginTop: '50px'}}>test1</div>
      <div data-tut="reactour__step2" style={{marginTop: '50px'}}>test2</div>
      <div data-tut="reactour__step3" style={{marginTop: '50px'}}>test3</div>
      <Tour
        steps={steps}
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
      />
    </div>
  );
}

export default App;
