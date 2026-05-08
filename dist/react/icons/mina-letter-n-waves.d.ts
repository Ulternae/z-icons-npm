import React from 'react';

export interface MinaLetterNWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNWaves: React.FC<MinaLetterNWavesProps>;
export default MinaLetterNWaves;
