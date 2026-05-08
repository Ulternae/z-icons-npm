import React from 'react';

export interface MinaPlusWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusWaves: React.FC<MinaPlusWavesProps>;
export default MinaPlusWaves;
