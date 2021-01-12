import React, { useState } from 'react';
import BackgroundGenerator from './BackgroundGenerator';
import './App.css';
import StoryTeller from './StoryTeller';
import Button from './Button';

const renderIntroContent = (setIsStoryActive: (val: boolean) => void ) => {
  return (
    <div>
      <p>
        The waking world has an order, a logical, understandable method by which it works.
        But when we sleep that changes, the rules and models that we built to understand the world fail us.
        It starts subtly, perhaps a clock moving backwards, but it quickly spreads, infecting every detail of the world around us.
        The effect? Sometimes it brings bliss, other times confusion or madness.
      </p>
      <p>
        Then, we wake, it was all a dream. So real a few moments ago but forgotten as we open our eyes.
        What strange oddities lie there? What damned fates of ours have we forgotten?
        Do you wish to know?
        Come, lie down, and sleep as you descend into a fever dream.
      </p>
      <Button
        label={'Sleep'}
        onClick={() => {
          setIsStoryActive(true);
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
        {"Thank you | 2021 | "}
        <a href="https://github.com/Fbalashov/FeverDream" 
          target="_blank"
          rel="noopener noreferrer">
            Learn more and submit feedback
          </a>
      </div>
    </div>
  );
}

export default App;
