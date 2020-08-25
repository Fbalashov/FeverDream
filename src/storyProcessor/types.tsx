
interface Story {
    prompts: String[];
    options: StorySegment[];
};

interface Label {
    label: string;
    probability: number;
};

interface StorySegment {
    labels: Label[];
    prompts: String[];
    options: StorySegment[];
}
