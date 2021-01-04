import {Story, StorySegment} from './types';

export const getSection = (story: Story, path: number[]) => {
    const activeSegment = path.reduce(
        (returnedSegment:  Story | StorySegment, pathIndex) => {
            if (!returnedSegment.options) {
                throw new Error(`Invalid Path provided ${path}`);
            }
            return returnedSegment.options[pathIndex];
        } 
        , story
    );

    return activeSegment;
};

export const makeDecision = (story: Story, path: number[], optionSelected: string) => {
    const remainingStory = path.reduce<Story | StorySegment>((remainingStory, step) => {
        if (!remainingStory.options) {
            throw new Error(`No more decisions can be made`);
        }
        return remainingStory.options[step];
    }, story);
    const options = remainingStory.options;
    if (!options) {
        throw new Error(`No more decisions can be made`);
    }
    
    // we will assume that all probabilities add up to 100
    // Select a random number between 0 and 100
    const optionCutoff = Math.floor(Math.random() * 100);
    // console.log(optionCutoff);
    let totalProbability = 0;
    // map through labels, add up the probability from labels which match the option from the random number.
    // When that exceeds the optionCutoff return that label and index.
    const selectedIndex = options.findIndex(option => {
        option.labels.forEach(label => {
            if (label.label === optionSelected) {
                totalProbability = totalProbability + label.probability;
            }
        });
        return totalProbability > optionCutoff;
    });
    // make seperate function that gets the text for the options and returns those.
    return [...path, selectedIndex];
};
