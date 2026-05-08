import React from 'react';

export interface MinaLetterXWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXWaves: React.FC<MinaLetterXWavesProps>;
export default MinaLetterXWaves;
