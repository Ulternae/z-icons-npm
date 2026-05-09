import React from 'react';

export interface MinaLetterSWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSWaves: React.FC<MinaLetterSWavesProps>;
export default MinaLetterSWaves;
