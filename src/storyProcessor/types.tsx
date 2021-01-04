
export interface Story {
    prompts: String[];
    options: StorySegment[];
};

export interface Label {
    label: string;
    probability: number;
};

export interface StorySegment {
    labels: Label[];
    prompts: String[];
    options?: StorySegment[];
}
