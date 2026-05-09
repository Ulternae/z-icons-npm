import React from 'react';

export interface MinaLetterPWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPWaves: React.FC<MinaLetterPWavesProps>;
export default MinaLetterPWaves;
