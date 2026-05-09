import React from 'react';

export interface MinaDollarWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarWaves: React.FC<MinaDollarWavesProps>;
export default MinaDollarWaves;
