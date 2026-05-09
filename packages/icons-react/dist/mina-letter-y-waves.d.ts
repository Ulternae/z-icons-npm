import React from 'react';

export interface MinaLetterYWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYWaves: React.FC<MinaLetterYWavesProps>;
export default MinaLetterYWaves;
