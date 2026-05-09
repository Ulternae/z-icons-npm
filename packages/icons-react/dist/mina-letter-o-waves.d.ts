import React from 'react';

export interface MinaLetterOWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOWaves: React.FC<MinaLetterOWavesProps>;
export default MinaLetterOWaves;
