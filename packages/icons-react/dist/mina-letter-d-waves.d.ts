import React from 'react';

export interface MinaLetterDWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDWaves: React.FC<MinaLetterDWavesProps>;
export default MinaLetterDWaves;
