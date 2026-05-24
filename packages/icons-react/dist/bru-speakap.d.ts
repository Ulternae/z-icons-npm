import React from 'react';

export interface BruSpeakapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSpeakap: React.FC<BruSpeakapProps>;
export default BruSpeakap;
