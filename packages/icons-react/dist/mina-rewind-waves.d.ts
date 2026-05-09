import React from 'react';

export interface MinaRewindWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindWaves: React.FC<MinaRewindWavesProps>;
export default MinaRewindWaves;
