import React from 'react';

export interface MinaLetterCWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCWaves: React.FC<MinaLetterCWavesProps>;
export default MinaLetterCWaves;
