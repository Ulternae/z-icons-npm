import React from 'react';

export interface MinaRupeeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeWaves: React.FC<MinaRupeeWavesProps>;
export default MinaRupeeWaves;
