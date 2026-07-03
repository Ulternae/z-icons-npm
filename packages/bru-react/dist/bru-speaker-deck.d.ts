import React from 'react';

export interface BruSpeakerDeckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSpeakerDeck(props: BruSpeakerDeckProps): React.ReactElement;
export default BruSpeakerDeck;
