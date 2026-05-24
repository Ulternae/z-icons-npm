import React from 'react';

export interface BruSpeakerDeckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSpeakerDeck: React.FC<BruSpeakerDeckProps>;
export default BruSpeakerDeck;
