import React from 'react';

export interface MinaLetterVWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVWaves: React.FC<MinaLetterVWavesProps>;
export default MinaLetterVWaves;
