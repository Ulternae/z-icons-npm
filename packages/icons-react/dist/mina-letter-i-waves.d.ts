import React from 'react';

export interface MinaLetterIWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIWaves: React.FC<MinaLetterIWavesProps>;
export default MinaLetterIWaves;
