import React from 'react';

export interface MinaLetterHWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHWaves: React.FC<MinaLetterHWavesProps>;
export default MinaLetterHWaves;
