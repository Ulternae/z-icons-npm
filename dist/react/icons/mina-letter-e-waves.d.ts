import React from 'react';

export interface MinaLetterEWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEWaves: React.FC<MinaLetterEWavesProps>;
export default MinaLetterEWaves;
