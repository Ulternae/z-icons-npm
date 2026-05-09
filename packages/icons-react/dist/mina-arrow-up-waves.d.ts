import React from 'react';

export interface MinaArrowUpWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUpWaves: React.FC<MinaArrowUpWavesProps>;
export default MinaArrowUpWaves;
