import React from 'react';
import './Background.css';
import { shuffle } from './util';

interface Props {
   run: number;
};

function BackgroundGenerator({run}: Props) {
  const backgrounds = React.useMemo(() => shuffle([
    (<div className="Background-Section">
        <div className="Background-DeepFried"></div>
    </div>),
    (<div className="Background-Section">
        <div className="Background-SkullParty"></div>
    </div>),
    (<div className="Background-Section" style={{height: '416px'}}>
        <div className="Background-Tombs"></div>
    </div>),
    (<div className="Background-Section">
        <div className="Background-NoteScratches"></div>
    </div>),
    (<div className="Background-Section">
        <div className="Background-OccultBackground"></div>
    </div>),
    (<div className="Background-Section">
        <div className="Background-CardsOccult"></div>
    </div>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ]), [run]);

  return (
    <div className="Background">
        <div className="Background-Section">
            <div className="Background-Stars"></div>
            <div className="Background-Twinkle"></div>
        </div>
        {backgrounds}
    </div>
  );
}

export default BackgroundGenerator;
