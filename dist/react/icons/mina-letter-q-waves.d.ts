import React from 'react';

export interface MinaLetterQWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQWaves: React.FC<MinaLetterQWavesProps>;
export default MinaLetterQWaves;
