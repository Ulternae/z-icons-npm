import React from 'react';

export interface MinaLetterUWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUWaves: React.FC<MinaLetterUWavesProps>;
export default MinaLetterUWaves;
