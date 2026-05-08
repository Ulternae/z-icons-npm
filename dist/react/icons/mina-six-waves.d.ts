import React from 'react';

export interface MinaSixWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixWaves: React.FC<MinaSixWavesProps>;
export default MinaSixWaves;
