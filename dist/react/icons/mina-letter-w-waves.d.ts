import React from 'react';

export interface MinaLetterWWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWWaves: React.FC<MinaLetterWWavesProps>;
export default MinaLetterWWaves;
