import React from 'react';

export interface MinaLetterTWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTWaves: React.FC<MinaLetterTWavesProps>;
export default MinaLetterTWaves;
