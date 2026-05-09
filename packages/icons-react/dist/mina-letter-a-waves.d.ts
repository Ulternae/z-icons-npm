import React from 'react';

export interface MinaLetterAWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterAWaves: React.FC<MinaLetterAWavesProps>;
export default MinaLetterAWaves;
