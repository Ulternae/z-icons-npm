import React from 'react';

export interface MinaLetterMWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMWaves: React.FC<MinaLetterMWavesProps>;
export default MinaLetterMWaves;
