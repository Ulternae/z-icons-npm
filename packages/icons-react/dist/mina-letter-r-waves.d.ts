import React from 'react';

export interface MinaLetterRWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRWaves: React.FC<MinaLetterRWavesProps>;
export default MinaLetterRWaves;
