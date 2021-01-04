import React, { useState } from 'react';
import { Story, StorySegment } from './storyProcessor/types';
import { story } from './storyProcessor/story';
import { makeDecision } from './storyProcessor';
import { scrollTo } from './util';
import Button from './Button';

interface Props {
    run: number;
    setRun: (run: number) => void;
}

function StoryTeller({run, setRun}: Props) {
  const [storyPath, setStoryPath] = useState<number[]>([]);
  const toldStory = storyPath.reduce<(Story|StorySegment)[]>((toldStory, step) => {
    const lastSegment = toldStory.slice(-1)[0];
    if (!lastSegment.options) {
        throw new Error(`No more decisions can be made`);
    }
    return [...toldStory, lastSegment.options[step]];
  }, [story]);
  const prompts = toldStory.map((story, index) => <div key={index}><p>{story.prompts}</p></div>);
  const lastSegment = toldStory.slice(-1)[0];
  const optionsToDisplay = lastSegment.options
    ? [ ...new Set(lastSegment.options.flatMap(option => option.labels.map(label => label.label)))]
    : [];
  return (
    <div className="Story">
        {prompts}
        <br/>
        {
            optionsToDisplay.length > 0 ?
                optionsToDisplay.map((option) =>
                    <Button 
                      key={option}
                      label={option}
                      onClick={() => {
                        setStoryPath(makeDecision(story, storyPath, option));
                        setTimeout(() => 
                            scrollTo(document.scrollingElement || document.body, document.body.scrollHeight, 1000),
                            100
                        );
                      }}
                    /> 
                )
            : <> FIN <br/> <br/> But every dream is different <br/> <Button label={'Try Another'} onClick={() => {setStoryPath([]); setRun(run+1)}}/> </>
        }
    </div>
  );
}

export default StoryTeller;
