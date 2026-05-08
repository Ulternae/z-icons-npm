import React from 'react';

export interface MinaLetterJWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJWaves: React.FC<MinaLetterJWavesProps>;
export default MinaLetterJWaves;
