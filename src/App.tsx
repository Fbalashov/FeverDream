import React, { useState } from 'react';
import BackgroundGenerator from './BackgroundGenerator';
import './App.css';
import StoryTeller from './StoryTeller';
import { scrollTo } from './util';
import Button from './Button';

const renderIntroContent = (setIsStoryActive: (val: boolean) => void ) => {
  return (
    <div>
      <p>
        The waking world has an order, a logical, understandable method by which it works.
        But when we sleep that changes, the rules and models that we built to understand the world fail us.
        It starts subtley, a backwards moving of a clock perhaps, but it quickly spreads, infecting every detail of the world around us.
        The effect? Sometimes it is brings bliss, other times confusion or madness.

        Then, we awake, it was all a dream. So real a few moments ago but forgotten as we open our eyes.
        What strange oddities lie there? What damned fates of ours have we forgotten?
        Do you wish to know?
        Come, lie down, and sleep as you descend into a fever dream.
      </p>
      <Button
        label={'Sleep'}
        onClick={() => {
          setIsStoryActive(true);
          setTimeout(() => 
            scrollTo(document.scrollingElement || document.body, document.body.scrollHeight, 1000),
            100
          );
        }}
      />
    </div>
  );
};

function App() {
  const [isStoryActive, setIsStoryActive] = useState<boolean>(false);
  const [run, setRun] = useState<number>(0);
  return (
    <div className="App">
      <BackgroundGenerator run={run}/>
      <header className="App-header">
        <h1>Fever Dream</h1>
      </header>
      <div className="App-content">
        {
          isStoryActive
          ? <StoryTeller setRun={setRun} run={run} />
          : renderIntroContent(setIsStoryActive)
        }
      </div>
      <div className="App-footer">
        {"Fever Dream - 2020 | "}
        <a href="https://github.com/FBalashov" 
          target="_blank"
          rel="noopener noreferrer">
            a project by a Dev
          </a>
      </div>
    </div>
  );
}

export default App;
