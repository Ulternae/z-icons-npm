import React from 'react';

export interface MinaLetterKWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKWaves: React.FC<MinaLetterKWavesProps>;
export default MinaLetterKWaves;
