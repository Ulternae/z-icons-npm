import React from 'react';

export interface MinaLetterZWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZWaves: React.FC<MinaLetterZWavesProps>;
export default MinaLetterZWaves;
