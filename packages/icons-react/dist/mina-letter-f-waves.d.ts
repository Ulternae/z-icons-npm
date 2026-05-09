import React from 'react';

export interface MinaLetterFWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFWaves: React.FC<MinaLetterFWavesProps>;
export default MinaLetterFWaves;
