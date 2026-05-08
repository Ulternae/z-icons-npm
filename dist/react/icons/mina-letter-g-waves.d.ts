import React from 'react';

export interface MinaLetterGWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGWaves: React.FC<MinaLetterGWavesProps>;
export default MinaLetterGWaves;
