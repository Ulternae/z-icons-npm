import React from 'react';

export interface MinaLetterBWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBWaves: React.FC<MinaLetterBWavesProps>;
export default MinaLetterBWaves;
