import React from 'react';

export interface MinaLetterLWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLWaves: React.FC<MinaLetterLWavesProps>;
export default MinaLetterLWaves;
